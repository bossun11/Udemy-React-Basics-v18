import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

// mapメソッドを使って、配列の要素をコンポーネントに変換する
const eachProfile = profile.map((profile, index) => {
  return (
    <Profile
      key={index}
      name={profile.name}
      age={profile.age}
      country={profile.country}
      color={profile.color}
    />
  );
});

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        {eachProfile}
      </Container>
    </div>
  );
};

export default Example;
