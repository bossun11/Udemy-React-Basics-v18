import { useState } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => setChecked(!checked);

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <label>
        チェック : 
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleChecked}
        />
        <div>{checked ? "ON!" : "OFF"}</div>
      </label>
    </div>
  );
};

export default Example;
