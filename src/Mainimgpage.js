import React, { useState } from "react";

import Subscriber from "./Subscriber";
import Comments from "./Comments";
import {useDispatch } from "react-redux";
import { increment } from "./reducer";
import Newcommetsforuser from "./Newcommetsforuser";
import Newsubforuser from "./Newsubforuser";

const Mainimgpage = () => {
    const dispatch =useDispatch()
  
  const [showSub, setShowSub] = useState(false);
  const [showComment, setShowComment] = useState(false);
 


 const change=()=>{
    dispatch(increment())
 }

  return (
    <div>
      <center>
        <div>
          <img
            style={{ marginTop: "50px" }}
            height={200}
            width={300}
            src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
            alt="Bestpic"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <button
            style={buttonStyle}
            onClick={() => setShowSub((showSub) => true)}
          >
            Subscriber
          </button>
          <button
            style={buttonStyle}
            onClick={() => setShowComment((showComment) => true)}
          >
            Comments
          </button>
          <button style={buttonStyle} onClick={change}>
            Likes
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          {showSub && (
            <div style={{ marginTop: "20px" }}>
              <Subscriber />
            </div>
          )}

          {showComment && (
            <div style={{ marginTop: "20px" }}>
              <Comments />
            </div>
          )}
          {/* {showLikes && (
            <div style={{ marginTop: "20px" }}>
              <Likes />
            </div>
          )} */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Newsubforuser />
          <Newcommetsforuser />
        </div>
      </center>
    </div>
  );
};

const buttonStyle = {
  height: "35px",
  width: "90px",
  borderRadius: "5px",
  borderColor: "black",
  fontFamily: "roboto",
  background: "blue",
  color: "white",
};

export default Mainimgpage;
