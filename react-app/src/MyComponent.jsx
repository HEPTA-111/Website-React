import { func } from "prop-types";
import React, { useState } from "react";

function MyComponent() {

  const [name,setName] = useState("Guest");
  const [quantitiy,setQuantity] = useState(1);  
  const[comment,setComment] = useState(""); 
  const[paymrnt,setPayment] = useState(""); 
  const[shipping,setShipping] = useState("");

  function handleNameChange (event) {
    setName(event.target.value);
  };

  function handleQuantityChange (event) {
    setQuantity(event.target.value);
  };

  function handleCommentChange (event) {
    setComment(event.target.value);
  };

  function handlePaymentChange (event) {  
    setPayment(event.target.value);
  };

  function handleShippingChange (event) {
    setShipping(event.target.checked);
  };


  return (
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name:{name}</p>


      <input value={quantitiy} onChange={handleQuantityChange} type ="number"/>
      <p>Quantity:{quantitiy}</p>


      <textarea value={comment} onChange={handleCommentChange} placeholder ="Any comments"/>
      <p>Comment:{comment}</p>

      <select  value={paymrnt} onChange={handlePaymentChange}>
        <option value="Cash">Select One</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Mobile Money">Mobile Money</option>
        <option value="Cheque">Cheque</option>
      </select>
      <p>Payment Method:{paymrnt}</p> 


      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick Up

      </label><br></br>
  
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping Method:{shipping}</p>

    </div>
   

    

  );
}
export default MyComponent;