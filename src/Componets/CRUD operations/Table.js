import React from "react";
import { Button, Table } from "react-bootstrap";

export const EmpTable = ({ employList,deleteEmp }) => {
  return (
    <div>
      <h1>read users from hear</h1>
      <Table striped bordered hover style={{ marginTop: "3%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {employList.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>
                  <Button onClick={()=>{
                    deleteEmp(value.id)
                  }}>delete</Button> <Button>update</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
