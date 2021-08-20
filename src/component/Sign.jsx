import React from "react";
import { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Sign(props) {
  const emailRef = useRef();
  const passRef = useRef();
  const passConRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  console.log(error);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== passConRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      history.push("/");
    } catch (err) {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <>
      <Card
        style={{ width: "40%", margin: "auto",  }}
        className="text-center"
      >
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-con">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passConRef} required />
            </Form.Group>

            <Button className="w-100" type="Submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account ? <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default Sign;
