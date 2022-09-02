type Props = {
    lines: number
}

const Score = (props: Props) => {
    return (
        <span>Lignes de codes générés : {props.lines}</span>
    )
}

export default Score