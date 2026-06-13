import React, {useState} from 'react';


function UpdateObject(){


    const [car,setCar]=useState({year:2024,
                                make:"Ford",
                                model:"Mustang"});
                                


    const yearChange=(event)=>{
        //setCar(event.target.value) cant do then object/car=2025 no longer an object
        setCar(c=>({...car,year:event.target.value}))
    }
    const makeChange=(event)=>{
        setCar(c=>({...car,make:event.target.value}))
    }
    const modelChange=(event)=>{
        setCar(c=>({...car,model:event.target.value}))
    }                              

    return (
        <div>
            <p>Your favourite car is :{car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={yearChange}></input><br/>
            <input type="text" value={car.make} onChange={makeChange}></input><br/>
            <input type="text" value={car.model} onChange={modelChange}></input><br/>
        </div>
    )                            

}

export default UpdateObject