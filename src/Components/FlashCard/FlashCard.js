import React, { Component } from 'react';
import seg from '../../Data/Hl7SegList'

import "./FlashCard.css"
class FlashCard extends Component {
    render() {
        if (seg) {
            let list = seg
        }
        return (
            <div className='card1'>
                <h1>{seg[0].code}</h1>
                <h1>{seg[0].name}</h1>
            </div>
        );
    }
}

export default FlashCard;