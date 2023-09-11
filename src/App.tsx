import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { persistor, store } from 'store';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import AppLayout from 'containers/layout/app/AppLayout';
import AuthLayout from 'containers/layout/login/AuthLayout';
import { I18nNamespace } from 'constants/i18n.const';
import { ALL_ROUTE_CHAR, AuthRouteConst } from 'constants/route.const';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';

const router = createBrowserRouter([
  {
    path: `${AuthRouteConst.AUTH}/${ALL_ROUTE_CHAR}`,
    element: <AuthLayout />,
  },
  {
    path: ALL_ROUTE_CHAR,
    element: <AppLayout />,
  },
]);

function App() {
  useTranslation(I18nNamespace.COMMON);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
