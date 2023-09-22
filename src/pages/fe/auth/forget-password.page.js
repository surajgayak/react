import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 
const ForgetPassword = () => {
  return (
    <>
      <div id="layoutAuthentication_content" className="py-3 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5}>
              <Card className="my-5 border-0 rounded-lg bg-dark">
                <Card.Header className="border-0 mb-2 ">
                  <h2 className="text-center text-white">Forget Your Password?</h2>
                </Card.Header>
                
                <Card.Body className="shadow-lg p-5 rounded-3 bg-dark">
                  
                  <p class="medium mb-4 text-white">
                    Please provide your email/username for the password reset link: 
                  </p>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="text-white">Username/Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <Button
                        variant="success"
                        type="submit"
                        size="sm"
                        className=" border-0"
                      >
                        Confirm Password
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
                <Card.Footer className="text-center border-0 pt-5 bg-transparent ">
                  <div class="medium">
                    <NavLink className={"text-white"} to="/register">Need an account? Sign up!</NavLink>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
 
export default ForgetPassword;