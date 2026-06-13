import React,{useState,useEffect} from 'react'

function UseEffect(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green");


    useEffect(()=>{document.title=`Count:${count} ${color}`
                  return ()=>{
                    
                  }


},[count,color]);
    const addCount=()=>{
        setCount(c=>c+1);
    }
    const subtractCount=()=>{
        setCount(c=>c-1);
    }


    const changeColor=()=>{
        setColor(c=>c=="green" ? "red":"green");
    }
    return(
        <>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br></br>
        <button onClick={changeColor}>Change Color</button>
        <p>Title: {document.title}</p>
        </>
    )
}
//state changes → JSX renders → DOM updates → useEffect runs


export default UseEffect