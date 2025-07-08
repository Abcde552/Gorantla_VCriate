import React, { useState } from 'react'
import { useContext } from 'react'
import { store } from './App'

const Display = () => {
    const [data,setData]=useContext(store)
    const [name,setName]=useState('')


 const submithandlert=(e)=>{
    e.preventDefault()
    setData([...data,{brandName:name}])
    setName('')
}

  return (
    <div>
      {data.map((item) => (
        <li>{item.brandName}</li>
      ))}
      <form onSubmit={submithandlert}>
        <input
          type='text'
          value={name}
          placeholder="Enter BrandName"
          onChange={(e) => setName(e.target.value)} required
        />
        <input
          type='submit'
        
        />
      </form>
    </div>
  );
}

export default Display
