import { all, fork } from 'redux-saga/effects'
import settings from './effects/settings'

const effects = function* () {
  yield all([
    fork(settings),
  ])
}

export default effects
