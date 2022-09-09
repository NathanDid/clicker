// Actions
const GENERATE_LINES = 'game::GENERATE_LINES'
const BUY_ITEM = 'game::BUY_ITEM'
const LOOP = 'game::LOOP'

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

export const generateLines = (lines: number): GenerateLinesAction => ({
    type: GENERATE_LINES,
    lines
})

export const buy = (item: Item): BuyAction => ({
    type: BUY_ITEM,
    item
})

export const loop = (): LoopAction => ({
    type: LOOP
})

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

type GenerateLinesAction = {
    type: typeof GENERATE_LINES
    lines: number
}

type BuyAction = {
    type: typeof BUY_ITEM
    item: Item
}

type LoopAction = {
    type: typeof LOOP
}

type Action = GenerateLinesAction | BuyAction | LoopAction

export const reducer = (state = initialState, action: Action) => {
    if (action.type === GENERATE_LINES) {
        return {
            ...state,
            lines: state.lines + action.lines
        }
    }

    if (action.type === BUY_ITEM) {
        return {
            ...state,
            lines: state.lines - action.item.cost,
            linesPerSecond: state.linesPerSecond + action.item.multiplier,
            ownedItems: [...state.ownedItems, action.item]
        }
    }

    if (action.type === LOOP) {
        const multiplier = state.ownedItems.reduce((multiplier, item) => {
            return multiplier + item.multiplier;
        }, 0);

        return {
            ...state,
            lines: state.lines + multiplier,
        }
    }

    return state
}

