import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const EmpForm = ({ submit, setFormData, formData }) => {
  return (
    <div>
      <Form
        style={{ marginTop: "5%", marginLeft: "10%", width: "50%" }}
        onSubmit={submit}
      >
        <h1>create users from hear</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            type="number"
            placeholder="age"
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
