import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Validation = () => {
  const [fisrtName, setFirstName] = useState("");
  const [fisrtNameErr, setFirstNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [isSubmit, serIsSubmit] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    if (fisrtName.length <= 0) {
      setFirstNameErr("this field is required");
    } else  {
      setFirstNameErr("");
    }
    if (fisrtName.length >= 15) {
      setFirstNameErr("length not be greater than 15");
    }
    if (fisrtName.length <= 5 && fisrtName.length !== 0) {
      setFirstNameErr("length not be less than 5");
    }
    if (lastName.length <= 0) {
      setLastNameErr("this field is required");
    } else {
      setLastNameErr("");
    }
  };
  const FirstNamechange = (event) => {
    setFirstName(event.target.value);
  };
  const lastNamechange = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div>
      {/* <h1>sign up form</h1> */}
      <Form className="w-50 m-5" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>fisrt Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={FirstNamechange}
          />
          <p className="text-danger">{fisrtNameErr}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={lastNamechange}
          />
          <p className="text-danger">{lastNameErr}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {isSubmit && <h1>your form has been succssfully submited</h1>}
    </div>
  );
};