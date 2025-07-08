import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { adduser } from './Newsub';

const Subscriber = () => {
  const dispatch=useDispatch()
    const [user,setUser]=useState();
    const handle =(e)=>{
        setUser(e.target.value)
    }
    const sub=(e)=>{
        
        dispatch(adduser(user))
        setUser('')
    }

  return (
    <div>
      <label >Enter Tour Name:</label><br/>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={handle}
        name="user"
        value={user}
      />
    
      <button
        style={{
          height: "35px",
          width: "90px",
          borderRadius: "5px",
          borderColor: "black",
          fontFamily: "roboto",
          background: "blue",
          color: "white",
          marginTop: "5px",
        }}
        onClick={sub}
      >
        Submit
      </button>
    </div>
  );
}

export default Subscriber
