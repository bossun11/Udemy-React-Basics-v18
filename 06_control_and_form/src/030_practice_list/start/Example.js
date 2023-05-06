import React from 'react';
import Profile from './components/Profile';

const Example = () => {
  const profiles = [
    {
      name: 'Geo',
      age: 18,
      hobbies: ['sports', 'music']
    },
    {
      name: 'Tom',
      age: 25,
      hobbies: ['movie', 'music']
    },
    {
      name: 'Lisa',
      age: 21,
      hobbies: ['sports', 'travel', 'game']
    }
  ];

  const profileList = profiles.map((profile) => {
    return (
      <li key={profile.name}>
        {/* <Profile {...profile} /> */}
        <Profile name={profile.name} age={profile.age} hobbies={profile.hobbies} />
      </li>
    );
  });

  return (
    <>
      <h3>練習問題</h3>
      <p>Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。</p>
      <p>また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。</p>
      <ul>
        { profileList }
      </ul>
    </>
  );
};

export default Example;
