const initialState = {
  visibleMenu: false,
  visibleCarousel: false,
}

const visible = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        visibleMenu: !state.visibleMenu,
      };

    case 'SHOW_CAROUSEL':
      return {
        ...state,
        visibleCarousel: !state.visibleCarousel,
      };
  
    default:
      return state;
  }
}

export default visible;