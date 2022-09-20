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
    name: 'user',
    initialState,
    reducers: {
        addItem: (state, { payload } : AddItemAction) => ({
            ...state,
            storeItems: [...state.storeItems, payload.item],
        })
    }
})

export const {
    addItem,
} = settingsSlice.actions

export const itemsSelector = (state: RootState) => state.settings.storeItems

export const reducer = { settingsSlice }

export default settingsSlice.reducer
