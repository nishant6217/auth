import React from "react";
import { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  const emailRef = useRef();
  const passRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  console.log(error);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
      history.push("/");
    } catch (err) {
      setError("Failed to login");
    }

    setLoading(false);
  }
  return (
    <>
      <Card style={{ width: "40%", margin: "auto",  }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passRef} required />
            </Form.Group>

            <Button className="w-100" type="Submit" disabled={loading}>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account ? <Link to="/signin">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
