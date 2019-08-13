import React, { createContext, useReducer } from 'react'
// import {} from '../types'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'A':
      return { ...state, x: action.payload }
    default:
      return state
  }
}

export const Store = createContext()

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
