import { NavLink, useNavigate, useParams } from "react-router-dom";
import authSvc from "./auth.service";
import { toast } from "react-toastify";
import { useCallback, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import {FaPaperPlane, FaTrash} from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const ActivateUser = () => {
    let params = useParams();
    let navigate = useNavigate();

    const passwordSchema = Yup.object({
        password: Yup.string().min(8).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    const formik = useFormik({
        initialValues: {
            password: null,
            confirmPassword:null 
        }, 
        validationSchema: passwordSchema,
        onSubmit: async (values) => {
            try{
                let response = await authSvc.activateAccount(values, params.token)
                if(response.status) {
                    toast.success(response.msg);
                    navigate("/login")
                } else {
                    toast.error("Cannot set password at this moment...")
                }
            } catch(exception){
                toast.error("Could not set password at this moment. Try refreshing the page...")
                console.log(exception)
            }
        }
    });

    const verifyToken = useCallback(async () => {
        try {
            let user = await authSvc.verifyActivationToken(params.token);
            if(!user) {
                toast.error("The link has been broken or not found...")
                navigate('/login')
            }

        } catch(error) {
            console.log(error)
            toast.error("Error while verifying token.")
        }
    }, [params.token, navigate])
    useEffect(() => {
        verifyToken()
    },[params,verifyToken]);

    return (<>
        <Container className="my-5" >
            <Row>
                <Col sm={12} md={{offset: 2, span:8}} className="bg-dark p-5">
                    <h4 className="text-white text-center mb-3">Set Password</h4>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3 text-white">Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    size="sm"
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your password..."
                                />
                                <span className="text-danger">
                                    { formik.errors.password ?? ''}
                                </span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Form.Label className="col-sm-3 text-white">Re-Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control 
                                    size="sm"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    placeholder="Enter your password..."
                                />
                                <span className="text-danger">
                                    { formik.errors.confirmPassword ?? ''}
                                </span>
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3">
                            <Col sm={{offset: 3, span:9}}>
                                <Button type="reset" variant="danger" size="sm" className="me-3" >
                                    <FaTrash></FaTrash> Cancel
                                </Button>
                                <Button type="submit" variant="success" size="sm" className="me-3" >
                                    <FaPaperPlane/> Submit
                                </Button>
                            </Col>
                            <Col sm={12} className={"text-white"}>
                                Or <NavLink className={"text-white"}  to={"/login"}>Login</NavLink>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}
export default ActivateUser;