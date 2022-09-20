import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

export type State = {
    lines: number,
    ownedItems: Item[],
    linesPerSecond: number
}

const initialState:State = {
    lines: 0,
    ownedItems: [],
    linesPerSecond: 0
}

export type GenerateLinesAction = {
    payload: {
        lines: number
    }
}

export type BuyAction = {
    payload: {
        item: Item,
    }
}

export const gameSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        generateLines: (state, {payload} : GenerateLinesAction) => ({
            ...state,
            lines: state.lines + payload.lines
        }),
        buy: (state, {payload} : BuyAction) => ({
            ...state,
            lines: state.lines - payload.item.cost,
            linesPerSecond: state.linesPerSecond + payload.item.multiplier,
            ownedItems: [...state.ownedItems, payload.item]
        }),
        loop: (state) => {
            const multiplier = state.ownedItems.reduce((multiplier, item) => {
                return multiplier + item.multiplier;
            }, 0);

            return {
                ...state,
                lines: state.lines + multiplier
            }
        }
    }
})

export const linesSelector = (state: RootState) => state.game.lines
export const ownedItemsSelector = (state: RootState) => state.game.ownedItems
export const linesPerSecondSelector = (state: RootState) => state.game.linesPerSecond

export const {
    generateLines,
    buy,
    loop
} = gameSlice.actions

export const reducer = { gameSlice }

export default gameSlice.reducer
