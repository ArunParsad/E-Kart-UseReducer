import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  total: 0,
  amount: 0,
  cart: [],
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  useEffect(() => {
    if (state.cart.length > 0) {
      dispatch({ type: 'GET_TOTALS' })
    }
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
