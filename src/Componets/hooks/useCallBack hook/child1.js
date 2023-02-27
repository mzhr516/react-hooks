import React, { memo, useEffect } from "react";

const Child1 = ({fun}) => {
  console.log("child renderd");
  useEffect(()=>{
    fun()
  })
  return <div>Child1</div>;
};

export default memo(Child1);
