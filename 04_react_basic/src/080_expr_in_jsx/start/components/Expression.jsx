import "./Expression.css";

export const Expression = () => {
  const title = "Expression";
  const arry = ['item1', 'item2', 'item3'];
  const hello = (arg) => {
    return `${arg} Function`
  }
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/* 画面上に表示されません */}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
      {bool}
    </div>
  )
};