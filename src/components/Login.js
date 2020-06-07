import React, { useState } from 'react';
import {Col, Form,Button } from 'react-bootstrap';

const RenderLogin = ({data}) => {
  const [ email, setEmail ] = useState('')
  const [ password,setPassword ] = useState('')

  const onSubmitLogin =(e) => {
    e.preventDefault();
    if ((email === data.email) && password === data.password){
      alert ("login sudah sesuai")
    } else {
      alert ("gagal login")
    }
  }
  return (
    <Form onSubmit={(e) => onSubmitLogin(e)}>
    <Form.Row>
    <Form.Group as={Col} xs={6} md={2}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={6} md={2}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="check me out " />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
          
                </Form>
  );
}


   
 export default RenderLogin