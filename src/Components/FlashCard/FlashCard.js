import React, { Component } from 'react';
import seg from '../../Data/Hl7SegList'

import "./FlashCard.css"
class FlashCard extends Component {
    render() {
        // if (seg) {
        //     let list = seg.ma
        // }
        return (
            <div className='card1'>
                <h1 className='seg-code'>{seg[0].code}</h1>
                <h1 className='seg-name'>{seg[0].name}</h1>
            </div>
        );
    }
}

export default FlashCard;