import React, { useState } from "react";

export const Practice4 = (props) => {
  const user1 = {
    name: "john",
    location: "nanded",
    position: "software developer",
  };
  const user2 = {
    name: "matthew",
    location: "mumbai",
    position: "project manager",
  };
  const [userDetails, setuserDetails] = useState(user1);
  const click = () => {
    if (userDetails.name === "john") {
      setuserDetails(user2);
    } else {
      setuserDetails(user1);
    }
  };
  return (
    <div>
      <h1>
        my name is {userDetails.name} and my location is {userDetails.location}{" "}
        and my position in the organisation is {userDetails.position}
      </h1>
      <button onClick={click}>next</button>
    </div>
  );
};
