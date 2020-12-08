import React, { ComponentType, useEffect } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "store";

export type RouteTypes = {
  path: string;
  component: ComponentType<RouteComponentProps>;
  exact?: boolean;
  private?: boolean;
};

const PrivateRouter: React.FC<RouteTypes> = ({
  component: RouteComponent,
  ...rest
}) => {
  const authState = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if(!authState.token) {
      <Redirect to={"/login"} />
    }
  })

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!authState.token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRouter;
