import React from 'react';
import './Tile.css';

interface Props{
    number: number;
    image?: string;
}
export default function Tile({number, image}: Props) {
    let  imgtxt = undefined
    imgtxt = image ? <img src={image}/> : '';
    if (number % 2 === 0) {
        return (<div className='tile black-tile'>
        {imgtxt}    
        </div>);
    }
    else {
        return (<div className='tile white-tile'>
        {imgtxt}
        </div>);
    }
}