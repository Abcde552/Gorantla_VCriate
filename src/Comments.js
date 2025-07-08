import React from 'react';
import { useState } from 'react';

import { addcomment } from './Newcomment';
import { useDispatch } from 'react-redux';

const Comments = () => {
  const dispatch=useDispatch()
  const [user, setUser] = useState();
  const handle = (e) => {
    setUser(e.target.value);
  };
  const sub = (e) => {
    e.preventDefault()
    dispatch(addcomment(user))
    setUser("");
  };

  return (
    <div>
      <label htmlFor="comments">Leave your comment:</label><br/>
      <textarea
        name="comments"
        placeholder="Enter User Comment"
        onChange={handle}
        value={user}
      ></textarea>

      <br />
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


export default Comments
