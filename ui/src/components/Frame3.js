import React from 'react'
import { useNavigate } from 'react-router-dom';
import Frame13 from './Frame 3.png'

const Frame3 = () => {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/frame4')
}

return (
<div>
<img src={Frame13} className="frame3" onClick={handleClick}></img>
</div>
  )
}

export default Frame3;