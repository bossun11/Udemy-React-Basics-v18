import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Apple");
  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </>
  );
};

export default Example;
