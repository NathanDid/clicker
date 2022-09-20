import { configureStore } from '@reduxjs/toolkit'
import gameReducer, { State as GameState } from './modules/game'
import createSagaMiddleware from 'redux-saga'
import settingsReducer, { State as SettingsState } from './modules/settings'


export type RootState = {
  game: GameState,
  settings: SettingsState
}

export const rootReducer = {
  game: gameReducer,
  settings: settingsReducer
}

export default function createStore(saga: any) {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([
      sagaMiddleware,
      ...getDefaultMiddleware()
    ])
  })

  sagaMiddleware.run(saga)

  return store
}