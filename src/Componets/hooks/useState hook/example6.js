import React, { useState } from "react";

export const Practice6 = () => {
  const [listItem, setListItem] = useState([]);
  const handleOnClick = () => {
    setListItem([...listItem, "li"]);
  };
  console.log(listItem);
  return (
    <div>
      <button onClick={handleOnClick}>add list item</button>
      <ul>
        {listItem.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
