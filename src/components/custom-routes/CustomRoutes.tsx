import { replace } from 'lodash';
import React, { FC, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { RoutesProps, RouteProps } from 'react-router-dom';

export type CustomRoutesProps = RoutesProps & {
  routes: RouteProps[];
  outerRoute?: string;
};

const CustomRoutes: FC<CustomRoutesProps> = ({
  routes,
  outerRoute = '',
  ...rest
}) => (
  <Suspense fallback={null}>
    <Routes {...rest}>
      {routes.map((item) => {
        const path = `${
          !outerRoute ? item.path : replace(item.path || '', outerRoute, '')
        }`;
        return <Route {...item} path={path} key={path} />;
      })}
    </Routes>
  </Suspense>
);

export default memo(CustomRoutes);
