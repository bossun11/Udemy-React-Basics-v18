import { useState } from "react";

const Example = () => {
  const [ val, setVal ] = useState('');
  const clearVal = () => setVal('');

  return (
    <div>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <div>
        <label htmlFor="input">ラベル</label>
        <br />
        <input
          id="input"
          placeholder="文字を入力してください"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <textarea
          id="textarea"
          placeholder="文字を入力してください"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};

export default Example;
