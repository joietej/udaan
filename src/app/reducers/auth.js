export default (state = { token : {}}, action) => {
  switch (action.type) {
    case "AUTH_COMPLETED":
      return { ...state, token : action.data.token };
    default:
      return state;
  }
};
