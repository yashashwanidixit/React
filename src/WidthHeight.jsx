import React,{useState,useEffect}  from "react";

function WidthHeight(){

    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("event listener");


        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("rmeoved");
        }

    },[]);


    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`
    },[width,height]);


    



    

    const handleResize=()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <>
        <p>Window Height:{height}px</p>
        <p>Window Width:{width}px</p>
        <p>Title:{document.title}</p>
        </>
    )


}

export default WidthHeight