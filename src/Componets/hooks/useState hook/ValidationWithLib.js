import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ValidationWithLib = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form className="w-50 m-5" onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>fisrt Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            {...register("firstName", { required: "this feild is reqired" })}
          />
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName", { required: "this field is required" })}
          />
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
