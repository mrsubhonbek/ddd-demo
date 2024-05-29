import { Button, Space } from 'antd';

import { decrement, increment, selectCount } from '../store/counter-slice';

import { useAppDispatch, useAppSelector } from '@/libs';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <Space>
      <Button
        type="primary"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <span>{count}</span>
      <Button
        type="primary"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Space>
  );
};
