const initialState = {
  count: 0,
  cart: 0,
  price: 125,
  sum: 0,
};

const count = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        count: state.count - 1,
      };

    case 'ADD_IN_CART':
      return {
        ...state,
        cart: state.cart + state.count,
        sum: state.price * (state.cart + state.count),
        count: 0,
      };

    case 'REMOVE_CART':
      return {
        ...state,
        cart: 0,
        sum: 0,
      };

    default:
      return state;
  }
};

export default count;