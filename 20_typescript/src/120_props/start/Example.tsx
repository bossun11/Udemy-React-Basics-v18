import { Btn } from "../end/Hello";
import Hello from "./Hello";

const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text) => console.log(text)} />
      <Hello text="Typescript">Children</Hello>;
    </>
  );
};

export default Example;
