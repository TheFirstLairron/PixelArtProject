import React from 'react';
import { SketchPicker } from 'react-color';



class ColorPicker extends React.Component {
    render() {
        return (
            <div>
                <SketchPicker color={this.props.currentColor} onChangeComplete={this.props.handleColorChange} />
            </div>
        );
    }
}

export default ColorPicker;