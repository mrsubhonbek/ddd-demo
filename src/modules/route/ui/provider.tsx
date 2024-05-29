import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '../domain/routes';

export const Provider:FC = () => {
  return <RouterProvider router={router} />;
};
