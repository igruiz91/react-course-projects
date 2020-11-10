const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((e) => e.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((e) => {
        if (e.id === action.payload) {
          return { ...e, amount: e.amount + 1 };
        }
        return e;
      }),
    };
  }
  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((e) => {
          if (e.id === action.payload) {
            if (e.amount > 0) {
              return { ...e, amount: e.amount - 1 };
            }
          }
          return e;
        })
        .filter((items) => items.amount !== 0),
    };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (acc, item) => {
        const { price, amount } = item;
        acc.total += price * amount;
        acc.amount += amount;
        return acc;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return {
      ...state,
      total,
      amount,
    };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart =  state.cart.map(cartItem => {
      if(cartItem.id === action.payload.id){
        if(action.payload.type==='increase'){
          return {...cartItem, amount: cartItem.amount+1 }
        }
        if(action.payload.type==='decrease'){
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }
      return cartItem 
    }).filter(items => items.amount !== 0)
    return {...state, cart: tempCart}
  }
  throw new Error('no matching action type')
};

export default reducer;
