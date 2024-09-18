import React from 'react'
import { useNavigate } from 'react-router-dom';
import Frame12 from './Frame 2.png'

const Frame2 = () => {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/frame3')
}

return (
<div>
<img src={Frame12} className="frame2" onClick={handleClick}></img>
</div>
  )
}

export default Frame2;