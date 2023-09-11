import { AuthRouteConst, AppRouteConst } from 'constants/route.const';
import React, { ComponentClass, FC, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/store-hooks';

interface WithAuthenticateOption {
  needAuthenticated?: boolean;
  unMatchingRedirect?: string;
}

// Todo: refactor code
export default function withAuthenticate(
  InnerComponent: ComponentClass<any> | FC,
  customOptions?: WithAuthenticateOption,
): FC {
  const options = {
    needAuthenticated: true,
    ...customOptions,
  };
  if (!options.unMatchingRedirect) {
    options.unMatchingRedirect = options.needAuthenticated
      ? AuthRouteConst.LOGIN
      : AppRouteConst.HOME;
  }
  const WithAuthenticate: FC = (props: any) => {
    const { ...otherProps } = props;
    const { token } = useAppSelector((state) => state.auth);

    const isAuthenticate = useMemo(() => !!token, [token]);

    if (options.needAuthenticated !== isAuthenticate) {
      return (
        <Navigate
          to={{
            pathname: options.unMatchingRedirect,
          }}
          replace
        />
      );
    }
    return <InnerComponent {...otherProps} />;
  };

  return WithAuthenticate;
}
