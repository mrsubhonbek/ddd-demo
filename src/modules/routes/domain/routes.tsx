import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/modules/core';
import { FlightTable } from '@/modules/table-flights';

import { ErrorPage } from '../ui/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/table',
    element: <FlightTable />,
    errorElement: <ErrorPage />,
  },
]);
