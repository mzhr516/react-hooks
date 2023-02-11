import React, { useState } from "react";

export const Practice7 = (props) => {
  const registeruserData = [
    { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
    { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
    { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
    {
      firstName: "khizer",
      lastName: "mohammad",
      location: "hyderabad",
      age: 35,
    },
  ];
  const unregisteruserData = [
    { firstName: "junaid", lastName: "uddin", location: "kolkata", age: 18 },
    { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
    { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
    { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
    { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
    { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
  ];

  const [userData, setuserData] = useState(registeruserData);
  const [condition, setCondition] = useState(false);

  console.log(condition)

  return (
    <div>
      <h1>register user data</h1>

      <table border={2}>
        <tr>
          <th>sr no.</th>
          <th>firstname</th>
          <th>last name</th>
        </tr>
        {userData.map((value) => {
          return (
            <tr>
              <td>1</td>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
            </tr>
          );
        })}
      </table>
      <button
        onClick={() => {
          if (condition === false) {
            setuserData(unregisteruserData);
            setCondition(true);
          } else {
            setuserData(registeruserData);
            setCondition(false);
          }
        }}
      >
        {condition  ?"get register user data":"get unregister user data"}
      </button>
    </div>
  );
};
