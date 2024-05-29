/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

import { errorCheck } from '@/libs';

export const ErrorPage: FC = () => {
  const error: any = useRouteError();
  console.log(error);

  if (errorCheck(error)) {
    return (
      <div id="error-page">
        <h1>Oops! Page not found</h1>
        <p>Sorry the route you are looking for does not exist.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};
