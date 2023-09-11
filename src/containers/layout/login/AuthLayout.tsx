import React from 'react';
import Grid from 'components/grid/Grid';
import GridColumn from 'components/grid/GridColumn';
import { ALL_ROUTE_CHAR, AuthRouteConst } from 'constants/route.const';
import Page404 from 'containers/app/other/404/404';
import Login from 'containers/auth/Login';
import CustomRoutes from 'components/custom-routes/CustomRoutes';
import './auth-layout.css';

const routes = [
  {
    path: AuthRouteConst.LOGIN,
    element: <Login />,
  },
  {
    path: ALL_ROUTE_CHAR,
    element: <Page404 />,
  },
];

const AuthLayout = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <GridColumn style={{ maxWidth: 450 }}>
      <CustomRoutes routes={routes} outerRoute={AuthRouteConst.AUTH} />
    </GridColumn>
  </Grid>
);

export default AuthLayout;
