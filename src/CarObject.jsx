import React, {useState} from 'react'


function CarObject(){

    const [cars,setCars]=useState([]);
    const [carYear,setcarYear]=useState(new Date().getFullYear());
    const [carMake,setcarMake]=useState("");
    const [carModel,setcarModel]=useState("");

    const addCar=()=>{
        const newCar={year:carYear,make:carMake,model:carModel};
        setCars(c=>[...c,newCar]);
        setcarMake("");
        setcarModel("");
        setcarYear(Date().getFullYear());



    }

    const removeCar=(index)=>{
        setCars(cars.filter((_,i)=>i!=index));
        


    }

    const yearChange=(event)=>{
        setcarYear[event.target.value];
        

    }

    const modelChange=(event)=>{
        setcarModel(event.target.value);
        

    }
    const makeChange=(event)=>{
        setcarMake(event.target.value);
        

    }
   


    return(
        <>
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index)=> <li key={index} onClick={()=>removeCar(index)}>
                    {car.year} {car.make} {car.model}
                                       
                </li>)}


            </ul>
            <input type="number" value={carYear} onChange={yearChange}></input><br></br>
            <input type="text" value={carMake} onChange={makeChange} placeholder="Enter car make"></input><br></br>
            <input type="text" value={carModel} onChange={modelChange} placeholder="Enter car model"></input><br></br>
            <button onClick={addCar}>Click to add Car</button>

        </div>
        </>
    )


}

export default CarObject