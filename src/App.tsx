// App.tsx
import React from 'react';
import { Button } from 'antd';
import Header from './components/header';
import { register } from './api/user';
import 'antd/dist/reset.css';

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
      <Button onClick={handleClick}>注册</Button>
      <Header />
    </div>
  );
};

export default App;
