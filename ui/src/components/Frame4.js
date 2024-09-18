import React from 'react'
import { useNavigate } from 'react-router-dom';
import Frame14 from './Frame 4.png'

const Frame4 = () => {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/frame5')
}

return (
<div>
<img src={Frame14} className="frame4" onClick={handleClick}></img>
</div>
  )
}

export default Frame4;