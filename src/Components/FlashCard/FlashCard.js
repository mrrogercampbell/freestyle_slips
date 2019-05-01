import React, { Component } from 'react';
import seg from '../../Data/Hl7SegList'
class FlashCard extends Component {
    render() {
        return (
            <div>
                <h1>{seg[0].code}</h1>
                <h1>{seg[0].name}</h1>
            </div>
        );
    }
}

export default FlashCard;