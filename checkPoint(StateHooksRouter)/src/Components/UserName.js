import React, { useState } from "react";

const UserName = ({ props }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Enter A name Here</h1>
      <input
        type="text"
        placeholder="Enter a different name than Sabeur"
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={()=>props.setName(inputValue)}>Change userName</button>
    </div>
  );
};

export default UserName;
