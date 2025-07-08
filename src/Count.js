import React from 'react'
import { useContext } from 'react'
import { store } from './App'

const Count = () => {
    const [data,setData]=useContext(store)
  return (
    <div>
      <h1>{data.length}</h1>
    </div>
  )
}

export default Count
