// App.tsx
import React from 'react';
import Header from './components/header';
import { register } from './api/user';

const App: React.FC = () => {
  const handleClick = async () => {
    try {
      const res = await register({
        username: 'ttt',
        password: '6666',
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={handleClick} type="button">注册</button>
      <Header />
    </div>
  );
};

export default App;
