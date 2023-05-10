import { useState } from "react";

const Child = ({ state, setState }) => {

  const incriment = () => {
    setState(prev => {
      const newState = { value: prev.value + 1 };
      return newState;
    });
  }

  return (
    <>
      <span>{state.value}</span>
      <button onClick={incriment}>+</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState}/>
      </div>
    </>
  );
};

export default Example;
