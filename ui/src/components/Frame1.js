import React from 'react'
import { useNavigate } from 'react-router-dom';
import Frame11 from './Frame 1.png'

const Frame1 = () => {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/frame2')
}

return (
<div>
<img src={Frame11} className="frame1" onClick={handleClick}></img>
</div>
  )
}

export default Frame1;