import * as React from "react";
import { connect } from "react-redux";
import { firebase } from "../../firebase";

interface InterfaceProps {
  authUser?: any;
}

interface InterfaceState {
  authUser?: any;
}

export const withAuthentication = (Component: any) => {
  class WithAuthentication extends React.Component<
    InterfaceProps,
    InterfaceState
  > {
    public componentDidMount() {
      const { onSetAuthUser }: any = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    public render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = (dispatch: any) => ({
    onSetAuthUser: (authUser: any) =>
      dispatch({ type: "AUTH_USER_SET", authUser })
  });

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};
