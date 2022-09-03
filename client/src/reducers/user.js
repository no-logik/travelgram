const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log(action.payload);
      state = [action.payload];
      return action.payload;
    case "CREATE":
      return state;
    default:
      break;
  }
};

export default reducer;
