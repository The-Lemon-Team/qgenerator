import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { observer } from 'mobx-react-lite';

import { loginUrl } from '../../utils';
import { useStores } from '../StoreProvider';

export type PrivateRouteProps = RouteProps;

export const PrivateRoutePure: React.FC<PrivateRouteProps> = ({
  component: Component,
  children,
  ...rest
}) => {
  const { authenticationStore } = useStores();

  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticationStore.isLoggedIn ? (
          Component ? (
            <Component {...props} />
          ) : (
            children
          )
        ) : (
          <Redirect to={loginUrl} />
        );
      }}
    />
  );
};

export const PrivateRoute = observer(PrivateRoutePure);
