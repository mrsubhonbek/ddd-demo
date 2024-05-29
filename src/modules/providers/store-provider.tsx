import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/modules/core';

export const StoreProviders: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
