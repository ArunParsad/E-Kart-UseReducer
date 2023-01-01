import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()
const initialState = {
  total: 0,
  amount: 0,
  cart: [],
  showModal: false,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  const increase = (id) => {
    dispatch({ type: 'INC', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DEC', payload: id })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const modalShow = () => {
    dispatch({ type: 'SHOW_MODAL' })
  }
  const modalClose = () => {
    dispatch({ type: 'ClOSE_MODAL' })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  useEffect(() => {
    if (state.cart.length === 0) {
      dispatch({ type: 'ClOSE_MODAL' })
    }
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        modalShow,
        modalClose,
        increase,
        decrease,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
