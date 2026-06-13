import React ,{useState,useEffect,useRef} from 'react'

function StopWatch(){
    const [isRunning,setisRunning]=useState(false);
    const [elapsedTime,setelapsedTime]=useState(0);
    const intervalId=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalId.current=setInterval(()=>{
                setelapsedTime(Date.now()-startTimeRef.current)
            },10)}

            return ()=>{
                clearInterval(intervalId.current);

            }
        

    },[isRunning]);


    const start=()=>{
        setisRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;
        

    }

    const stop=()=>{
        setisRunning(false);

    }

    const reset=()=>{
        setelapsedTime(0);
        setisRunning(false);

    }

    const formatTime=()=>{

       
        let minutes=Math.floor(elapsedTime/(1000*60)%60);
        let seconds=Math.floor((elapsedTime/(1000))%60);
        let milliseconds=Math.floor((elapsedTime%1000)/10);
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");
        return `${minutes}:${seconds}:${milliseconds}`;

    }

    return(
        <>
        <div className="stopwatch">
            <h1 >STOP WATCH</h1>
            <div className="display">
                {formatTime()}

            </div>
            <div className="controls">
                <button className="start" onClick={start}> Start</button>
                <button className="stop" onClick={stop}> Stop</button>
                <button className="reset" onClick={reset}> Reset</button>
            </div>



        </div>
        </>
    )


}

export default StopWatch