import items from './items.json'
import {Item} from './Game'

type Props = {
    lines: number,
    onClick: (item: Item) => void
}

const Store = (props: Props) => {
    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <button
                            disabled={props.lines < item.cost}
                            onClick={() => props.onClick(item)}
                        >
                            {item.name} ({item.cost})
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Store