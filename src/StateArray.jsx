
import React ,{useState} from 'react';

function StateArray(){


    const [foods,setFoods]=useState(["apple","orange"]);
    const addFood=()=>{
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";//make the inout box emoty after hte element is entered.
        setFoods(f=>[...f,newFood]);



        

    }
       

    const removeFood=(index)=>{
        setFoods(foods.filter((_,i)=>i!=index));

         

    }//the element paramter is not actually used so replce wiith _

    return(<div>
        <h2>List of food</h2>
        <p>Click on the element to remove it</p>
        <ul>
            {foods.map((food,index)=><li key={index} onClick={()=>removeFood(index)} >{food}  </li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={addFood}> Add Food</button>
         
    </div>
//event.target is the button in the button 
    )


}

export default StateArray