const INITIAL_STATE = {
  users: {}
};

const applySetUsers = (state: any, action: any) => ({
  ...state,
  users: action.users
});

export function userReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "USERS_SET": {
      return applySetUsers(state, action);
    }
    default:
      return state;
  }
}
