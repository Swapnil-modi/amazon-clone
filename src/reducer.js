export const initialState = {
  basket: [],
  user: null,
};
export const totalCost = (basket) =>
  basket?.reduce((amt, item) => item.price + amt, 0);
const reducer = (state, action) => {
  //   console.log(action.type);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(`cann't detete item ${action.id} as it is not in basket`);
      }
      return {
        ...state,
        basket: newbasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
