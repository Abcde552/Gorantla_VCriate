import React from 'react'
import './App.css'
import {  useSelector } from 'react-redux';

const Navbarforredux = () => {
    const value=useSelector((state)=>
        state.counter.value
    )

    const valu = useSelector((state) => state.newsubs.value);
    const val = useSelector((state) => state.newcomment.value)




  return (
    <div className="navbar">
      <div className="nav-item">Subscriber:{valu.length}</div>
      <div className="nav-item">Comments:{val.length}</div>
      <div className="nav-item">Likes:{value}</div>
    </div>
  );
}

export default Navbarforredux
