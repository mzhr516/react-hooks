import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const ValidationWithLib = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    formState,
    reset,
    watch,
  } = useForm({
    reValidateMode: "onSubmit",
    defaultValues:{firstName:"mazhar",age123:18}
  });
  console.log(formState);
  const submit = (data) => {
    console.log(data);
    reset()
  };
  return (
    <div>
      <Form className="w-50 m-5" onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>fisrt Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            {...register("firstName", {
              required: {
                value: true,
                message: "this field is required",
              },
              maxLength: {
                value: 15,
                message: "not be greater than 15 charectors",
              },
              minLength: {
                value: 5,
                message: "not be less than 5 charectors",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName", {
              required: "this field is required",
              minLength: {
                value: 3,
                message: "not be less than 3 charectors",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            {...register("age123", {
              required: "this field is required",
              min: {
                value: 18,
                message: "age not be less than 18 years",
              },
              max: {
                value: 99,
                message: "age not be greater than 99 years",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.age123?.message}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "this email is not valid",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>{watch("firstName")}</h1>
      {isSubmitSuccessful && <h1>form has been valid succssfully</h1>}
    </div>
  );
};
