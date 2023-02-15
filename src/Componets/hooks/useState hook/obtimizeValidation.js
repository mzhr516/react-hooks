import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ObtimizeValidation = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErr, setFormErr] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  console.log(formErr);
  const submit = (e) => {
    e.preventDefault();
    validation();
    if (validation()) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  };
  const validation = () => {
    const valid = { firstName: false, lastName: false };
    const errmesage = {
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
    };
    if (formData.firstName.length <= 0) {
      errmesage.firstNameErr = "this field is required";
    } else if (
      formData.firstName.length < 5 &&
      formData.firstName.length !== 0
    ) {
      errmesage.firstNameErr = "length not be less than 5";
    } else if (formData.firstName.length >= 15) {
      errmesage.firstNameErr = "length not be greater than 15";
    } else {
      valid.firstName = true;
    }

    if (formData.lastName.length <= 0) {
      errmesage.lastNameErr = "this field is required";
    } else {
      valid.lastName = true;
    }

    setFormErr(errmesage);
    if (valid.firstName && valid.lastName) {
      return true;
    } else {
      return false;
    }
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
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
          <p style={{ color: "red" }}>{formErr.firstNameErr}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
          <p style={{ color: "red" }}>{formErr.lastNameErr}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" placeholder="Enter email address" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {isSubmit && <h1>your form has been succssfully submited</h1>}
    </div>
  );
};
