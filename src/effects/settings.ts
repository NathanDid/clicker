import * as settingsSlice from '../modules/settings'

import {
    all,
    put,
    takeLeading,
  } from 'redux-saga/effects'

function* fetchItems() {
  try {
    const items = JSON.parse(localStorage.getItem('items') ?? '[]')

    yield all([
      put(settingsSlice.fetchItems(items)),
    ])
  } catch (error) {
    console.error(error)
  }
}

function* addItem({ payload: { item }}: settingsSlice.AddItemAction) {
    const items = JSON.parse(localStorage.getItem('items') ?? '[]')
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
}

function* resetItems() {
    localStorage.clear()
}

export default function* settings() {
  yield takeLeading(settingsSlice.fetchItems, fetchItems)
  yield takeLeading(settingsSlice.addItem, addItem)
  yield takeLeading(settingsSlice.resetItems, resetItems)
}
