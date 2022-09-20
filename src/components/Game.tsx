import { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";

import Gitcoin from './Gitcoin';
import Score from './Score';
import Store from './Store';
import Inventory from './Inventory';
import { useSelector, useDispatch } from 'react-redux';
import { buy, generateLines, linesSelector, linesPerSecondSelector, ownedItemsSelector, loop } from '../modules/game';

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

const Game = () => {
    const dispatch = useDispatch()

    const lines = useSelector(linesSelector)
    const ownedItems = useSelector(ownedItemsSelector)
    const linesPerSecond = useSelector(linesPerSecondSelector)

    const handleGenerateLines = (lineNumber = 1) => {
        dispatch(generateLines({lines: lineNumber}))
    }

    const handleBuy = (item: Item) => {
        dispatch(buy({item: item}))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(loop())
        }, 1000)

        return () => clearInterval(interval)
      }, [lines, ownedItems, linesPerSecond])

    return (
        <>
            <Gitcoin onClick={handleGenerateLines}/>
            <Score lines={lines} linesPerSecond={linesPerSecond}/>
            <Store lines={lines} onClick={handleBuy}/>
            <Inventory ownedItems={ownedItems}/>
        </>
    )
}

export default Game