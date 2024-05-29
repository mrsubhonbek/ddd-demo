import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/modules/core';
import { ErrorPage } from '../ui/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
