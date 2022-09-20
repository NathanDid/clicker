import { FormEvent } from "react"

type InputType = 'text'|'number'

type Value<T extends InputType> = T extends 'text' ? string : number;

type Props<T extends InputType> = {
    type: T;
    value: Value<T>;
    name: string;
    onChange: (value: string) => void;
}

function Input<T extends InputType>({
    type,
    value,
    name,
    onChange
}: Props<T>) {
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <>
            <input
                type={type}
                name={name}
                onChange={handleChange}
                value={value}
            />
        </>
    )
}

export default Input