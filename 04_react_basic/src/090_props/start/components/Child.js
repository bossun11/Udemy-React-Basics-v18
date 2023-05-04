import "./Child.css";

const Child = ({ color }) => {
  return (
    <div className={`component ${color}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
