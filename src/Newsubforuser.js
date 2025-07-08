import React from 'react';
import { useSelector } from "react-redux";

const Newsubforuser = () => {
  const newsub = useSelector((state) => state.newsubs.value);
  return (
    <div>
        <h1>Subscribers_Names</h1>
      {newsub.map((item, index) => (
        <li style={{listStyle:'none'}}>{item}</li>
      ))}
    </div>
  );
}

export default Newsubforuser
