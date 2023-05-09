// App.tsx
import React from 'react';
import { Button, message } from 'antd';
import Header from './components/header';
import { register } from './api/user';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  const handleClick = async () => {
    try {
      const res = await register({
        username: 'tttmmm',
        password: '6666',
      });
      console.log(res);
      message.success(res.data.message);
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
