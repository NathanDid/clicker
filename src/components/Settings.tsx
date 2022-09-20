import { FormEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addItem, fetchItems, itemsSelector, resetItems } from "../modules/settings"
import { Item } from "./Game"
import Input from "./Input"

const Settings = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems({}))
      }, [])

    const defaultCost = 10
    const defaultMulitplier = 1

    const [itemName, setItemName] = useState('')
    const [itemCost, setItemCost] = useState(defaultCost)
    const [itemMultiplier, setItemMultiplier] = useState(defaultMulitplier)

    const items = useSelector(itemsSelector)

    const handleItemNameChange = (itemName: string) => {
        setItemName(itemName)
    }

    const handleItemCostChange = (itemCost: string) => {
        setItemCost(parseInt(itemCost))
    }

    const handleItemMultiplierChange = (itemMultiplier: string) => {
        setItemMultiplier(parseInt(itemMultiplier))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const item:Item = {
            name: itemName,
            cost: itemCost,
            multiplier: itemMultiplier
        }

        dispatch(addItem({item: item}))
        resetForm()
    }

    const handleReset = () => {
        dispatch(resetItems())
    }

    const resetForm = () => {
        setItemName('')
        setItemCost(defaultCost)
        setItemMultiplier(defaultMulitplier)
    }

    return (
        <>
            <h1>Settings</h1>

            <form onSubmit={handleSubmit}>
                <Input type="text" value={itemName} name="itemName" onChange={handleItemNameChange}/>
                <Input type="number" value={itemCost} name="itemCost" onChange={handleItemCostChange}/>
                <Input type="number" value={itemMultiplier} name="itemMultiplier" onChange={handleItemMultiplierChange}/>
                <button type="submit">Submit</button>
            </form>

            <button onClick={handleReset}>Clear</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} ({item.cost} / {item.multiplier})
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Settings