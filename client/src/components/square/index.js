import React from 'react'
import './index.css'


const Square = (props) => {
    let {num} = props;
  return (
    <div className='square'>
        {num}
    </div>
  )
}

export default Square