import React, { useState } from "react";

export const Practice5 = (props) => {
  const [isLogin, setIslogin] = useState(false);
  //   if (isLogin === false) {
  //     return (
  //       <>
  //         <h1>you are not login</h1>
  //         <button
  //           onClick={() => {
  //             setIslogin(true);
  //           }}
  //         >
  //           login
  //         </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>you are login</h1>
  //         <button
  //           onClick={() => {
  //             setIslogin(false);
  //           }}
  //         >
  //           logout
  //         </button>
  //       </>
  //     );
  //   }

  return (
    <div>
      <h1>{isLogin ? "you are login" : "you are not login"}</h1>
      <button
        onClick={() => {
          isLogin ? setIslogin(false) : setIslogin(true);
        // setIslogin()
        }}
      >
        {isLogin ? "logout" : "login"}
      </button>
    </div>
  );
};
