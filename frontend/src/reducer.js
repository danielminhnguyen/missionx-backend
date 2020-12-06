export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN":
      // Verify login here
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
