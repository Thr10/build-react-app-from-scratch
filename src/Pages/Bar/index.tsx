import React from 'react';
import { message } from 'antd';
import { useAppSelector, useAppDispatch } from '../../store/storeHooks';
import { decrement, increment } from '../../store/slice/counterSlice';
import { register } from '../../api/user';

const Bar = () => {
  // 测试redux
  const count = useAppSelector((state) => { return state.counter.value; });
  const dispatch = useAppDispatch();
  // 网络请求测试
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
      <div>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => { return dispatch(increment()); }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => { return dispatch(decrement()); }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Bar;
