import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const { name, age } = person;

  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  const resetButton = () => {
    setPerson({ name: "", age: "" });
  };

  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <input type="text" value={name} onChange={changeName} />
      <input type="number" value={age} onChange={changeAge} />
      <br />
      <button onClick={resetButton}>リセット</button>
    </>
  )
};

export default Example;
