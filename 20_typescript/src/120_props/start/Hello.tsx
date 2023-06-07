import React from "react";

type HelloProps = {
  text: string;
  children?: React.ReactNode;
};

const Hello: React.FC<HelloProps> = ({ text, children }) => {
  return (
    <h1>
      Hello {text}! {children}
    </h1>
  );
};

type FnProps = {
  fn: (text: string) => void;
};

export const btn: React.FC<FnProps> = ({ fn }) => {
  return <button onClick={() => fn("TypeScript")}></button>;
};
export default Hello;
