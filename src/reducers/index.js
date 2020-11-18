const initialState = {};

export default function cartReducer(state = initialState, action) {
  // console.log("action", action.item.id);
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(action.item);
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id]
            ? state[action.item.id].quantity + 1
            : 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      const newState = { ...state };
      delete newState[action.item.id];
      return newState;
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          quantity: action.item.quantity,
        },
      };
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
export const getCartTotal = (state) => {
  let sum = 0;
  Object.values(state).forEach((item) => {
    sum += item.price * item.quantity;
  });
  return sum / 100;
};
