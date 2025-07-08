// import React, { useState } from 'react'
// import {useDispatch} from 'react-redux'
// import "bootstrap/dist/css/bootstrap.min.css";
// import { deposit,withdraw,updatembl,updatename ,reset} from './Actions';


// const Forms = () => {
//     const dispatch=useDispatch()
//   const [amount,setAmount]=useState()
//   const [names,setName]=useState("")
//   const [mbl,setMbl]=useState()
//   return (
//     <div>
//       <center>
//         <h1 className="text-secondary">Form component</h1>
//         <div>
//           <input
//             className="mb-3"
//             type="number"
//             required
//             placeholder="Enter Amount"
//             onChange={(e) => setAmount(e.target.value)}
//             value={amount}
//           />

//           <button
//             className="btn btn-primary m-3"
//             onClick={() => {
//               dispatch(deposit(amount));
//               // dispatch({type:'Add',payload:{
//               //   amount:amount, type:"Credit", date:new Date()
//               // }})
//               setAmount("");
//               // localStorage.setItem("amount", amount);
//             }}
//           >
//             Deposit
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => {
//               dispatch(withdraw(amount));
//               // dispatch({
//               //   type: "Add",
//               //   payload: {
//               //     amount: Number(amount),
//               //     type: "Dedit",
//               //     date: new Date(),
//               //   },
//               // });
//               setAmount("");
//             }}
//           >
//             withdraw
//           </button>
//         </div>

//         <div>
//           <input
//             className="mb-3"
//             type="text"
//             required
//             placeholder="Enter Name"
//             onChange={(e) => setName(e.target.value)}
//             value={names}
//           />

//           <button
//             className="btn btn-primary m-3"
//             onClick={() => {
//               dispatch(updatename(names));
//               setName("");
//               ////localStorage.setItem("names", names);
//             }}
//           >
//             update
//           </button>
//         </div>

//         <div>
//           <input
//             className="mb-3"
//             type="number"
//             required
//             placeholder="Enter Mbl"
//             onChange={(e) => setMbl(e.target.value)}
//             value={mbl}
//           />

//           <button
//             className="btn btn-primary m-3"
//             onClick={() => {
//               dispatch(updatembl(mbl));
//               setMbl("");
//                localStorage.setItem("mbl",mbl)
//             }}
//           >
//             update
//           </button>
//         </div>
//         <button
//           className="btn btn-primary m-3"
//           onClick={() => {
//             dispatch(reset());
//             setMbl("");
//              localStorage.setItem("mbl",mbl)
//           }}
//         >
//           reset
//         </button>
//       </center>
//     </div>
//   );
// }

// export default Forms
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { increment, decrement ,reset} from "./Actions";

const Forms = () => {
  const dis=useDispatch()
  const data = useSelector((state) => state);
  console.log(data)
  return (
    <div>
      <h1>{data.count}</h1>
      <button onClick={() => dis(increment())}>Increment</button>
      <button onClick={() => dis(decrement())}>Decrement</button>
      <button onClick={() => dis(reset())}>Reset</button>
    </div>
  );
}

export default Forms;

