export default (state = null, action) => {
  switch (action.type) {
    case 'select_news':
      return action.payload;
    default:
      return state;
  }
};
