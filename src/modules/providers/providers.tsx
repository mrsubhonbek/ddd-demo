import { FC } from 'react';

import { Provider } from '@/modules/routes';

import { StoreProviders } from './store-provider';
import { ConfigTheme } from './config-theme-provider';

export const Providers: FC = () => {
  return (
    <StoreProviders>
      <ConfigTheme>
        <Provider />
      </ConfigTheme>
    </StoreProviders>
  );
};
