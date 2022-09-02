import React from 'react';

type Props = {
}

type State = {
    counter: number,
    text: string
}

class Clicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            counter: 0,
            text: 'Click me'
        }
    }

    handleClick() {
        let text = this.state.text

        if (this.state.counter >= 10) {
            text = 'Stop plzzz'
        }

        this.setState({
            counter:    this.state.counter + 1,
            text:       text
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>{this.state.text}</button>
                <span>Counter : {this.state.counter}</span>
            </>
        )
    }
}

export default Clicker;