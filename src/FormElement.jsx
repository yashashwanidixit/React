

import React,{useState} from'react'
function FormElement(){

    const [name,setName]=useState("type here ");
    const [quantity,setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [shipping,setShipping]=useState("Delivery");


    function shippingChange(event){
        setShipping(event.target.value);
    }
    function commentChange(event){
        setComment(event.target.value);

    }
    const [payment,setPayment]=useState("");


    const handlePayment=(event)=>{
        setPayment(event.target.value);    }


    const nameChange=(event)=>{
        setName(event.target.value);

    }
    const quanChange=(event)=>{
        setQuantity(event.target.value);
    }
    return(//value:text currenlty inside the text box
        <div>
            <input value={name} onChange={nameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={quanChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={commentChange} placeholder="Enter Delivery Instructions."/>
            <p>Comment: {comment}</p>



            <select value={payment} onChange={handlePayment}>
                <option value ="">Select an option.</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">Giftcard</option>




            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="pickup" 
                       checked={shipping=="pickup"}
                       onChange={shippingChange}></input>
                Pick Up
            </label>

            <label>
                <input type="radio" value="delivery" 
                       checked={shipping=="delivery"}
                       onChange={shippingChange}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )

}


export default FormElement