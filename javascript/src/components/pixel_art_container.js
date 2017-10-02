import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCurrentColor, setColorOnPosition, setImageForDownload } from '../actions/index';

import ColorPicker from './color_selector';
import Square from './square';


class PixelArtContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleColorChange = this.handleColorChange.bind(this);
        this.renderSquares = this.renderSquares.bind(this);
        this.handleColorChangeOnSquare = this.handleColorChangeOnSquare.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleSubmittingImage = this.handleSubmittingImage.bind(this);
    }

    render() {

        if (this.props.image !== "") {
            return(<div className="image-container">
                <img src={this.props.image} onClick={this.handleImageClick} />
            </div>);
        }

        return (
            <div>
                <span className="picker"><ColorPicker currentColor={this.props.current_color} handleColorChange={this.handleColorChange} /></span>
                <button onClick={this.handleSubmittingImage}>Submit</button>
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
                        Array(64).fill().map(() => {
                            if(y == 64)
                            {
                                y = 0;
                            }
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

    handleSubmittingImage(){
        this.props.setImageForDownload(this.props.squares);
    }

    handleImageClick() {
        let link = document.createElement("a");
        link.href = this.props.image;
        link.download = "untitled.png";
        document.body.appendChild(link);
        link.click();
    }
}

function mapStateToProps({ current_color, squares, image }, ownProps) {
    return {
        squares,
        current_color,
        image
    };
}

function mapDispatchToProps(dispatch) {
    // Add new actions that need to be triggered to this object
    return bindActionCreators({ setCurrentColor, setColorOnPosition, setImageForDownload }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PixelArtContainer);