import reducer, {
    generateLines,
    State,
    Item,
    buy,
    loop,
    linesSelector,
    initialState,
    ownedItemsSelector,
    SelectableState
} from "./game"

describe('game selectors', () => {
    it('lines selector', () => {
        const state: SelectableState = {
            game: {
                ...initialState,
                lines: 99,
            }
        }

        expect(linesSelector(state)).toEqual(99)
    })

    it('ownedItems selector', () => {
        const item1:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 2
        }

        const item2:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 3
        }

        const state: SelectableState = {
            game: {
                ...initialState,
                ownedItems: [item1, item2],
            }
        }

        expect(ownedItemsSelector(state)).toEqual([item1, item2])
    })
})

describe('game reducer', () => {
    it('generate a line', () => {
        const state = reducer(initialState, generateLines({lines: 1}))
        expect(state.lines).toBe(1)
    })

    it('generate lines with multipler', () => {
        const item1:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 2
        }

        const item2:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 3
        }

        const aState = {
            ...initialState,
            lines: 300,
            ownedItems: [item1, item2],
            linesPerSecond: 5
        }

        const state = reducer(aState, loop)

        expect(state.lines).toBe(305)
    })

    it('buy an item', () => {
        const aState: State = {
            ...initialState,
            lines: 300,
        }

        const item:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 2
        }

        const state = reducer(aState, buy({item: item}))

        expect(state.lines).toBe(200)
        expect(state.ownedItems).toEqual([item])
        expect(state.linesPerSecond).toBe(2)
    })

    it('failed to buy an item', () => {
        const item:Item = {
            name: 'Test item',
            cost: 100,
            multiplier: 2
        }

        const callReducer = () => {
            reducer(initialState, buy({item: item}))
        }

        expect(callReducer).toThrow(Error('Cant buy item'));
    })
})