import { Space } from 'antd';

import { Counter } from '@/modules/counter';
import { Pokemon } from '@/modules/pokemon';

export const App = () => {
  return (
    <Space direction="vertical">
      <Counter />
      <Pokemon />
    </Space>
  );
};
