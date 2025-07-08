import React from 'react'
import { useSelector } from 'react-redux'

const Newcommetsforuser = () => {
    const newcomment=useSelector((state)=>state.newcomment.value)
  return (
    <div>
      <h1>comments</h1>
      {newcomment.map((item, index) => (
        <li style={{ listStyle: 'none' }}>{item}</li>
      ))}
    </div>
  );
}

export default Newcommetsforuser
