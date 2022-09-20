import { configureStore } from '@reduxjs/toolkit'
import gameReducer, { State as GameState } from './modules/game';
import settingsReducer, { State as SettingsState } from './modules/settings';


export type RootState = {
  game: GameState,
  settings: SettingsState
}

export const rootReducer = {
  game: gameReducer,
  settings: settingsReducer
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