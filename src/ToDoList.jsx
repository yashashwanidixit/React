import React ,{useState} from 'react'


function ToDoList(){

    const [tasks,setTasks]=useState([]);
    

    

    const addTask=()=>{
        
        const newTask=document.getElementById("newTask").value;
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
        document.getElementById("newTask").value="";

        }
        


    }

    const deleteTask=(index)=>{
        const updatedTasks=tasks.filter((_,i)=>i!=index);
        setTasks(updatedTasks);

    }

    const moveUp=(index)=>{
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);

        }

    }

    const moveDown=(index)=>{
        if(index<tasks.length()-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);

        }
        
    }





   

    return(
        <>
        <div className="todolist">
            <h1 className="doit">TO DO LIST</h1>
            <div >
                <input
                className="input"
                type="text"
                placeholder="Enter a Task..."
                id="newTask"
                >
                </input>
                <button className="add-button" onClick={addTask}>Add task to todolist.</button>
                </div>
                <div>
                    <ol className="ol">
                        {tasks.map((task,index)=><li className="list" key={index}>
                                                     <span className="text">{task}</span>
                                                     <button className="delete-button" onClick={()=>deleteTask(index)}>Delete </button>
                                                     <button className="up-button" onClick={()=>moveUp(index)}>UP </button>
                                                     <button className="down-button" onClick={()=>moveDown(index)}>DOWN </button>
                                                     
                                           
                                            </li>)
                                            }
                    </ol>
                    
                
            </div>

        </div>
        </>
    )



}

export default ToDoList