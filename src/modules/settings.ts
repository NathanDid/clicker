import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { Item } from "./game";

export type State = {
    storeItems: Item[]
}

export const initialState:State = {
    storeItems: [],
}

export type AddItemAction = {
    payload: {
        item: Item,
    }
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        addItem: (state, action) => ({
            ...state,
            storeItems: [...state.storeItems, action.payload.item],
        }),
        fetchItems: (state, { payload }) => ({
            ...state,
            storeItems: payload
        }),
        resetItems: (state) => ({
            ...state,
            storeItems: []
        })
    }
})

export const {
    addItem,
    fetchItems,
    resetItems
} = settingsSlice.actions

export const itemsSelector = (state: RootState) => state.settings.storeItems

export const reducer = { settingsSlice }

export default settingsSlice.reducer
