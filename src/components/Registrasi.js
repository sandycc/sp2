import React, { useState } from 'react';
import { Col,Form,Button } from 'react-bootstrap';

const RenderRegistrasi = ({ dataRegistrasi, ...props}) => {
  const [ name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [ state ,setState] = useState('')


  const onSubmitRegistrasi = (e) => {
    e.preventDefault()
    dataRegistrasi({
      name,
      email,
     password,
     gender,
     address,
     state
     
    })
  }
  return (
    <Form onSubmit={(e) => onSubmitRegistrasi(e)}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text"onChange={(e) => setPassword(e.target.value)}  />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>gender</Form.Label>
          <Form.Control type="text" onChange={(e) => setGender(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={(e) => setState(e.target.value)}>
            <option>Choose...</option>
            <option>semarang</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>name</Form.Label>
          <Form.Control  type="text" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>

  )
}
export default RenderRegistrasi