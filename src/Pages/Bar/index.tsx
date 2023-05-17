import React from 'react';
import { message } from 'antd';
import { register } from '../../api/user';

const Bar = () => {
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
      Bar
    </div>
  );
};

export default Bar;
