import React, { useEffect, useState } from 'react';

import Gitcoin from './Gitcoin';
import Score from './Score';
import Store from './Store';
import Inventory from './Inventory';


type Props = {
}

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

const Game = (props: Props) => {
    useEffect(() => {
        const interval = setInterval(() => {
          // Do something
        }, 100)

        return () => clearInterval(interval)
      }, []
    )

    const [lines, setLines] = useState(0)
    const [ownedItems, setOwnedItems] = useState<Item[]>([])

    const generateLine = () => {
        setLines(lines + 1)
    }

    const buy = (item: Item) => {
        setLines(lines - item.cost)
        setOwnedItems([...ownedItems, item])
    }

    return (
        <>
            <Gitcoin onClick={generateLine}/>
            <Score lines={lines}/>
            <Store lines={lines} onClick={buy}/>
            <Inventory ownedItems={ownedItems}/>
        </>
    )
}

export default Game