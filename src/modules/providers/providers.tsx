import { FC, PropsWithChildren } from 'react';
import { StoreProviders } from './store-provider';
import { ConfigTheme } from './config-theme-provider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProviders>
      <ConfigTheme>{children}</ConfigTheme>
    </StoreProviders>
  );
};
