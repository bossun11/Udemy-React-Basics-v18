const Example = () => {
  // 練習用
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "Taro",
    age: 12,
  };

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "イレイナ",
    age: 18,
    gender: "woman",
  };
};

export default Example;
