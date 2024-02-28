import React, { useEffect, useState } from "react";
import UserName from "./UserName";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sabeur");
  const [style, setStyle] = useState({ color: "blue" });

  useEffect(() => {
    if (count === 10) {
      setStyle({ color: "red" });
    }
    if (count === 10) {
      setName("Mohamed");
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p style={style}> You clicked {count}</p>
      <button onClick={handleClick}>Increase here</button>
      <h1>{name}</h1>
      <UserName props={{ setName: setName }} />
    </div>
  );
};

export default Hooks;
