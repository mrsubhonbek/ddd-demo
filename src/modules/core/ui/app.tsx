import { Space } from 'antd';

import { Counter } from '@/modules/counter';
import { Pokemon } from '@/modules/pokemon';
import { Providers } from '@/modules/providers';

export const App = () => {
  return (
    <Providers>
      <Space direction="vertical">
        <Counter />
        <Pokemon />
      </Space>
    </Providers>
  );
};
