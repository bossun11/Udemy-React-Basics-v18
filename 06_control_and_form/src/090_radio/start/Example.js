import { useState } from "react";

const Example = () => {
  const RADIO_COLLECTION = ["リンゴ", "バナナ", "チェリー"];

  const [fruit, setFruit] = useState(RADIO_COLLECTION[0]);

  const onChange = (e) => setFruit(e.target.value);

  const inputRadioCollections = RADIO_COLLECTION.map((value) => {
    return (
      <label key={value}>
        <input type="radio"
          value={value}
          checked={fruit === value}
          onChange={onChange}
        />
        {value}
      </label>
    );
  });

  return (
  <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
    {inputRadioCollections}
    <h3>私は{fruit}がたべたい</h3>
  </>
  );
};

export default Example;
