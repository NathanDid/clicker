import { configureStore } from '@reduxjs/toolkit'
import gameReducer, { State } from './modules/game';

export type RootState = {
  game: State
}

export const rootReducer = {
  game: gameReducer
}

export default function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([
      ...getDefaultMiddleware()
    ])
  })

  return store
}