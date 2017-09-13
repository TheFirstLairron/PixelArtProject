import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ColorPicker from './color_selector';
import { setCurrentColor } from '../actions/index';

class PixelArtContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleColorChange = this.handleColorChange.bind(this);
    }

    render() {
        return (
            <div>
                <div><ColorPicker currentColor={this.props.current_color} handleColorChange={this.handleColorChange} /></div>
                <h1 style={{ backgroundColor: this.props.current_color }}>Content</h1>
            </div>
        );
    }

    handleColorChange(color) {
        console.log(color.hex);
        this.props.setCurrentColor(color.hex);
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
    return bindActionCreators({ setCurrentColor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PixelArtContainer);