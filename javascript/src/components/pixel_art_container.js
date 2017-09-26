import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCurrentColor, setColorOnPosition } from '../actions/index';

import ColorPicker from './color_selector';
import Square from './square';


class PixelArtContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleColorChange = this.handleColorChange.bind(this);
        this.renderSquares = this.renderSquares.bind(this);
        this.handleColorChangeOnSquare = this.handleColorChangeOnSquare.bind(this);
    }

    render() {
        return (
            <div>
                <span className="picker"><ColorPicker currentColor={this.props.current_color} handleColorChange={this.handleColorChange} /></span>
                <br />
                <table>
                    <tbody>
                        {this.renderSquares()}
                    </tbody>
                </table>
                <br />
            </div>
        );
    }

    renderSquares() {
        let grid = [];
        let x = 0;
        let y = 0;
        for (x = 0; x < 64; x++) {
            grid.push((
                <tr key={x} className="square">
                    {
                        Array(64).fill().map(() =>{
                            let value = <Square key={x + ',' + y} x={x} y={y} clickHandler={this.handleColorChangeOnSquare} color={this.props.squares[x + ',' + y]} />;
                            y++;
                            return value;
                        })
                    }
                </tr>
            ));
    }
        return grid;
    }

handleColorChange(color) {
    this.props.setCurrentColor(color.hex);
}

handleColorChangeOnSquare(x, y) {
    this.props.setColorOnPosition(this.props.current_color, x, y);
}
}

function mapStateToProps({ current_color, squares }, ownProps) {
    return {
        squares,
        current_color
    };
}

function mapDispatchToProps(dispatch) {
    // Add new actions that need to be triggered to this object
    return bindActionCreators({ setCurrentColor, setColorOnPosition }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PixelArtContainer);