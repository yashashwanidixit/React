
import styles from './Button.module.css'
function Button(){
    /*const styles={
        
  backgroundColor:"hsl(42, 100%, 50%)",
  color:"white",
  padding:"10px 20px",
  borderRadius:"5px",
  border:"none",
  cursor:"pointer",



}*/ let count=0;
    const handleClick=(name)=>{
        if(count<3) {
            count++;
            console.log(`You clicked me ${count} times.`)
        }
        else {
            console.log(`${name} stop clicking me!`)
        }


    };
    const handleClick2=(name)=>console.log(`${name} stop clicking me!`);
    const handleClick3=(e)=>e.target.textContent="ouch!";
    
    
//handleclick:no () mean we are passing the function except handleclick2() where we have() so it passes the result
    return(
        <button onDoubleClick={(e)=>handleClick3(e)}className={styles.button}>Click me</button>
    );
}
export default Button