import React from 'react';
import './Minichess.css';
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
export default function Minichess() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const number = i + j + 2 ;
            if (number % 2 === 0) {
                board.push(<div className="tile black-tile">
                </div>);
            }else
            board.push(<div className ="tile white-tile">
            </div>
            );
        }
    }
    
    return <div id = "chessboard">{board}</div>
}