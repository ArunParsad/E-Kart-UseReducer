const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    // if cart is empty the add product
    const searchItem = state.cart.some((item) => item.id === action.payload.id)
    if (state.cart.length === 0 || searchItem === false) {
      return { ...state, cart: [...state.cart, action.payload] }
    }

    return {
      ...state,
      cart: [...state.cart].map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, qty: product.qty + 1 }
        }
        return product
      }),
    }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((product) => product.id !== action.payload),
    }
  }
  if (action.type === 'GET_TOTALS') {
    let totalPrice = 0
    let totalQty = 0
    state.cart.forEach((product) => {
      totalQty += product.qty
      totalPrice = product.qty * product.price
    })

    return { ...state, amount: totalQty, total: totalPrice }
  }

  if (action.type === 'SHOW_MODAL') {
    if (state.cart.length !== 0) {
      return {
        ...state,
        showModal: true,
      }
    }
  }
  if (action.type === 'ClOSE_MODAL') {
    return {
      ...state,
      showModal: false,
    }
  }

  if (action.type === 'INC') {
    return {
      ...state,
      cart: [...state.cart].map((product) => {
        if (product.id === action.payload) {
          return { ...product, qty: product.qty + 1 }
        }
        return product
      }),
    }
  }
  if (action.type === 'DEC') {
    return {
      ...state,
      cart: [...state.cart]
        .map((product) => {
          if (product.id === action.payload) {
            return { ...product, qty: product.qty - 1 }
          }
          return product
        })
        .filter((product) => product.qty !== 0),
    }
  }

  return state
}

export default reducer
