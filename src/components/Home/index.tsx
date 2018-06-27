import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { db } from "../../firebase";
import { withAuthorization } from "../Session/withAuthorization";
import { UserList } from "./UserList";

class HomeComponent extends React.Component {
  public componentDidMount() {
    const { onSetUsers }: any = this.props;

    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }

  public render() {
    const { users }: any = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  users: state.userState.users
});

const mapDispatchToProps = (dispatch: any) => ({
  onSetUsers: (users: any) => dispatch({ type: "USERS_SET", users })
});

const authCondition = (authUser: any) => !!authUser;

export const Home = compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomeComponent);
