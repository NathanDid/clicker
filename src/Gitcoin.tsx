
type Props = {
    onClick: () => void
}

const Gitcoin = (props: Props) => {
    return (
        <>
            <img
                onClick={props.onClick}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
        </>
    )
}

export default Gitcoin;