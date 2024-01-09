import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import axios from 'axios';

function LoginForm() {
  const { authToken, login, logout } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showFailed, setShowFailed] = useState(false);
  const [errorText, setErrorText] = useState("");

  const loginClick = async (e) => {
    e.preventDefault();

    await axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/login", { email, password })
    .then (result => {
      if (result.data.success) {
        login(result.headers.get('Authorization'));
        navigate('/sow');
      } else {
        setShowFailed(true);
        setErrorText(result.data.message);
      }
    })
    .catch (err => {
      setShowFailed(true);
      setErrorText("Something went wrong!");
    })
  }


  return (
    <Form>
      { showFailed && (
        <Form.Text style={{ color: 'red' }}>
          { errorText }
        </Form.Text>)}
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Email address</Form.Label><br />
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} /><br />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Password</Form.Label><br />
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => loginClick(e)}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;