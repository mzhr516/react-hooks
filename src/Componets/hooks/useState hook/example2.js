import React, { useState } from "react";

export const Practice2 = (props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div>
        {isShow ? (
          <div
            style={{
              backgroundColor: "blue",
              width: "300px",
              height: "200px",
              border: "1px solid black",
              marginLeft: "40%",
            }}
          ></div>
        ) : (
          <button
            onClick={() => {
              setIsShow(true);
            }}
          >
            get rectangle
          </button>
        )}
      </div>
    </>
  );

  //   if (isShow === false) {
  //     return (
  //       <>
  //         <button
  //           onClick={() => {
  //             setIsShow(true);
  //           }}
  //         >
  //           get rectangle
  //         </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <div
  //           style={{
  //             backgroundColor: "blue",
  //             width: "300px",
  //             height: "200px",
  //             border: "1px solid black",
  //             marginLeft: "40%",
  //           }}
  //         ></div>
  //         <button>get rectangle</button>
  //       </div>
  //     );
  //   }
};
