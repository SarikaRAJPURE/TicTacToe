import React from 'react'
import Square from '../square';
import './index.css'
const Board = () => {
    return (
        <div>
            <h1>Board</h1>
            <div className='square-container'>
            <Square num='1' />
            <Square num='2' />
            <Square num='3' />
            <Square num='4' />
            <Square num='5' />
            <Square num='6' />
            <Square num='7' />
            <Square num='8' />
            <Square num='9' />
            </div>
        </div>
    )
}

export default Board