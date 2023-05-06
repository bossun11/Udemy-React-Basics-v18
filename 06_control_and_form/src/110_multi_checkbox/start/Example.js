import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    // 配列のcheckedを変更する
    const newFluits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !newFruit.checked;
      }
      return newFruit;
    });
    setFruits(newFluits);

    // let sumVal = 0;
    // newFluits.forEach((fruit) => {
    //   if (fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // });

    // newFluits
    //   .filter((fruit) => fruit.checked)
    //   .forEach((fruit) => {
    //   sumVal += fruit.value;
    // });

    const sumVal = newFluits
      .filter((fruit) => fruit.checked)
      .reduce((sum, fruit) => sum + fruit.value, 0);
    setSum(sumVal);
  }

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              type="checkbox"
              value={fruit.label}
              onChange={handleChange}
              id={fruit.label}
              checked={fruit.checked}
            />
            <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
