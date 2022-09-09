import { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";

import Gitcoin from './Gitcoin';
import Score from './Score';
import Store from './Store';
import Inventory from './Inventory';
import { useSelector, useDispatch } from 'react-redux';
import { buy, loop, generateLines } from '../modules/game';
import { RootState } from '../modules';

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

const Game = () => {
    const dispatch = useDispatch()

    const lines = useSelector((state:RootState) => state.game.lines)
    const ownedItems = useSelector((state:RootState) => state.game.ownedItems)
    const linesPerSecond = useSelector((state:RootState) => state.game.linesPerSecond)

    const params = useParams()
    //console.log(params.name)

    const handleGenerateLines = (lineNumber = 1) => {
        dispatch(generateLines(lineNumber))
    }

    const handleBuy = (item: Item) => {
        dispatch(buy(item))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            //dispatch(loop())
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