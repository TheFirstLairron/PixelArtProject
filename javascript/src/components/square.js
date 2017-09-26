import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <td className="square" style={{ backgroundColor: this.props.color, borderColor: "#000000", borderWidth: 1 }} onClick={this.handleClick} />
        );
    }

    handleClick() {
        this.props.clickHandler(this.props.x, this.props.y);
    }
}