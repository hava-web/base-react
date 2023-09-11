import React, { FC, lazy } from 'react';
import { ALL_ROUTE_CHAR, AppRouteConst } from 'constants/route.const';
import CustomRoutes from 'components/custom-routes/CustomRoutes';
import LeftMenu from './left-menu/LeftMenu';
import AppHeader from './header/AppHeader';
import './app-layout.css';

const Dashboard = lazy(() => import('containers/app/dashboard/Dashboard'));
const Guide = lazy(() => import('containers/app/other/guide/Guide'));
const Page404 = lazy(() => import('containers/app/other/404/404'));

const routes = [
  {
    path: AppRouteConst.HOME,
    element: <Dashboard />,
  },
  {
    path: AppRouteConst.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: AppRouteConst.GUIDE,
    element: <Guide />,
  },
  {
    path: ALL_ROUTE_CHAR,
    element: <Page404 />,
  },
];

const AppLayout: FC = () => (
  <div className="app-container">
    <AppHeader />
    <div className="content-container">
      <div className="left-menu-section">
        <LeftMenu />
      </div>
      <div className="right-container">
        <div className="main-section">
          <CustomRoutes routes={routes} />
        </div>
      </div>
    </div>
  </div>
);

export default AppLayout;
