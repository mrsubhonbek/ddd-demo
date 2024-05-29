import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';

import config from '@/config/config-theme.json';

export const ConfigTheme: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={config}>{children}</ConfigProvider>
);
