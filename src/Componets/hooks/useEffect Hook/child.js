import React, { useEffect } from "react";

export const Child = (props) => {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);
  return <div>Child</div>;
};
