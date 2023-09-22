import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
 
const PasswordConfirmation = () => {
  return (
    <>
      <div id="layoutAuthentication_content" className="py-3 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5}>
              <Card className="my-5 border-0 rounded-lg bg-transparent">
                <Card.Header className="border-0 mb-2 bg-transparent">
                  <h2 className="text-center">Forget Your Password?</h2>
                </Card.Header>
                <Card.Body className="shadow-lg p-5 rounded-3 bg-white">
                  <p class="medium mb-4">
                    Please confirm your password for your security before
                    continuing.
                  </p>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <Button
                        variant="dark"
                        type="submit"
                        className="w-50 border-0 p-3"
                      >
                        Confirm Password
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
                <Card.Footer className="text-center border-0 pt-5 bg-transparent ">
                  <div class="medium">
                    <a href="/signin">Need an account? Sign up!</a>
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
 
export default PasswordConfirmation;