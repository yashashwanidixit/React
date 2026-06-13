import React,{useState} from 'react'

function MyComponent(){
   const  [name,setName]=useState("Guest");
   const [age,setAge]=useState(0);
   const [isEmployed,setisEmployed]=useState(false);

    const updateName=()=>{
        setName("Spongebob");
    }

    const updateAge=()=>{
        setAge(age+1);
    }
    const updateStatus=()=>{
        setisEmployed(!isEmployed)
    }


    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        
        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>
        <p>isemployed: {isEmployed ? "Yes":"No"}</p>
        <button onClick={updateStatus}>Toggle employed status</button>
    </div>)

}

export default MyComponent