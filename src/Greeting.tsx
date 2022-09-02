import React from 'react';

type Props = {
    firstname?: string | null,
    lastname: string,
}

class Greeting extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Hello {this.props.firstname} {this.props.lastname}</h1>
                <p>Nice to see ya</p>
            </div>
        )
    }
}

export default Greeting;