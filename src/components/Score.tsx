type Props = {
    lines: number,
    linesPerSecond: number
}

const Score = (props: Props) => {
    return (
        <span>Lignes de codes générés : {props.lines} ({props.linesPerSecond} par seconde)</span>
    )
}

export default Score