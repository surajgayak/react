import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Card, Form, Button, Col, FormControl } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import * as Yup from "yup";

import authSvc from "./auth.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [btnDsb] = useState(false);
  const navigate = useNavigate();

  const userSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    role: Yup.string().matches(/seller|customer/),
    phone: Yup.string().nullable(),
    address: Yup.string(),
    image: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "customer",
      phone: "",
      address: "",
      image: "",
    },
    validationSchema: userSchema,
    onSubmit: async (data) => {
      try {
        let formData = authSvc.datamap(data);
        await authSvc.registerUser(formData);

        toast.success(
          "Your account has been registered successfully. Please check your email for further process."
        );
        navigate("/");
      } catch (exception) {
        console.error(exception);
      }
    },
  });

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    let user = localStorage.getItem("user");
    if (token && user) {
      if (typeof user === "string") {
        user = JSON.parse(user);
      }
      navigate("/" + user.role);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Card
              bg={"dark"}
              key={"dark"}
              className="mb-2 shadow-lg border-0 rounded-lg mt-5"
            >
              <Card.Header className="bg-dark text-white">
                <h3 className="text-center  my-4">User Registration</h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="row mb-3" controlId="formGridName">
                    <Form.Label className="text-white col-sm-3">
                      Name
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        name="name"
                        onChange={formik.handleChange}
                        size="sm"
                        type="text"
                        placeholder="Enter your Full Name"
                      />
                      <span className="text-danger">{formik.errors?.name}</span>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    controlId="formGridEmail"
                    className="row mb-3 text-white"
                  >
                    <Form.Label className="col-sm-3">Email</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        size="sm"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        placeholder=" Email"
                      />

                      <span className="text-danger">
                        {formik.errors?.email}
                      </span>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 row text-white"
                    controlId="formGridAddress2"
                  >
                    <Form.Label className="col-sm-3">Phone no.</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        size="sm"
                        type="tel"
                        name="phone"
                        onChange={formik.handleChange}
                        placeholder="Phone Number"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 row text-white"
                    controlId="formGridAddress2"
                  >
                    <Form.Label className="col-sm-3">Address.</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        as="textarea"
                        size="sm"
                        rows={5}
                        name="address"
                        onChange={formik.handleChange}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    className="row mb-3 text-white"
                    controlId="formGridState"
                  >
                    <Form.Label className="col-sm-3">Role</Form.Label>
                    <Col sm={9}>
                      <Form.Select
                        name="role"
                        size="sm"
                        onChange={(e) => {
                          let { value } = e.target;
                          formik.setValues({
                            ...formik.values,
                            role: value,
                          });
                        }}
                        defaultValue="Choose..."
                      >
                        <option value={"customer"}>Customer</option>
                        <option value={"seller"}>Seller</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group className="row mb-3 text-white">
                    <Form.Label className="col-sm-3">Image</Form.Label>
                    <Col sm={6}>
                      <FormControl
                        size="sm"
                        name="image"
                        onChange={(e) => {
                          // single file upload
                          // {0:uploadedFileObject}
                          // {0: uploaded, 1: uploaded}
                          let single = e.target.files[0];
                          if (single) {
                            let ext = single.name.split(".").pop();
                            // console.log(single, single.size)

                            if (
                              [
                                "jpg",
                                "jpeg",
                                "png",
                                "bmp",
                                "svg",
                                "webp",
                              ].includes(ext.toLowerCase())
                            ) {
                              if (single.size <= 5000000) {
                                formik.setValues({
                                  ...formik.values,
                                  image: single,
                                });
                              } else {
                                formik.setErrors({
                                  ...formik.errors,
                                  image: "File size should be less than 5mb",
                                });
                              }
                            } else {
                              formik.setErrors({
                                ...formik.errors,
                                image: "Image cannot be null/empty",
                              });
                            }

                            // formik.setErrors({
                            //     ...formik.errors,
                            //     image: "Error Msg"
                            // })
                          } else {
                            formik.setValues({
                              ...formik.values,
                              image: null,
                            });
                          }
                        }}
                        type="file"
                      />
                      <span className="text-danger">
                        {formik.errors ? formik.errors.image : ""}
                      </span>
                    </Col>
                    <Col sm={3}>
                      {formik.values &&
                      formik.values.image &&
                      typeof formik.values.image === "object" ? (
                        <img
                          src={URL.createObjectURL(formik.values.image)}
                          className="img img-fluid"
                          alt=""
                        />
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group className="row mb-3">
                    <Col sm={{ offset: 3, span: 9 }}>
                      <Button
                        size="sm"
                        variant="danger"
                        type="reset"
                        className="me-3"
                      >
                        <FaTrash /> &nbsp;&nbsp;Submit
                      </Button>
                      <Button
                        disabled={btnDsb}
                        size="sm"
                        variant="success"
                        type="submit"
                      >
                        <FaPaperPlane />
                        &nbsp;&nbsp;Submit
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
