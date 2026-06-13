import React,{useState} from 'react'

function ColorPicker(){

    const [color,setColor]=useState("#FFFFFF");
    const changeColor=(event)=>{
        setColor(event.target.value);
    }


    return(
        <div className="color-picker-container">
            <h1 className="h">Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>

                <p>Selected color: {color}</p>    </div>


                <label>Select a color:</label>
                <input value={color} type="color" onChange={changeColor}></input>



            

            
        </div>

    );

}

export default ColorPicker