import React, { useState } from "react";

const FunctionComponent = ({ Name, Age, Author, setName }) => {
  const [Count, setCount] = useState(0);
  const [ChangeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(Count - 1);
  };
  return (
    <div>
      <p>This is Functional Component</p>
      <button onClick={() => setCount(Count + 1)}>
        Click on me to increment by one
      </button>

      <button onClick={reduceCount}>Click on me to decrement by one</button>
      <h2>{Count}</h2>
      <h4>
        My Company is: {Name}. It is {Age} years old and the author would be
        {Author}
      </h4>

      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(ChangeName)}>Change Name to ...</button>
    </div>
  );
};

export default FunctionComponent;

// Props : {
//  Name : "KASH",
//  Age : 21,
//  Author : "Aniruddh"
// }

/* <input onChange={(e) => console.log(e.target.value)} /> */

/* <button onClick={() => Props.setName(ChangeName)}>
        Change Name to Ekansh
      </button> */
