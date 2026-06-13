import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import FormElement from './FormElement.jsx'
import ColorPicker from './ColorPicker.jsx'
import UpdateObject from './UpdateObject.jsx'
import StateArray from './StateArray.jsx'
import CarObject from './CarObject.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffect from './useEffect.jsx'
import WidthHeight from './WidthHeight.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'
import UseRef from './UseRef.jsx'
import StopWatch from './StopWatch.jsx'
function App() {
  const fruits=[{id:1,name:"apple",calories:"apple"},
                  {id:2,name:"orange",calories:105},
                  {id:3,name:"banana",calories:139},
                  {id:4,name:"coconut",calories:109},
                  {id:5,name:"pineapple",calories:100}];
  
  const vegetables=[{id:6,name:"apple",calories:95},
                  {id:7,name:"orange",calories:105},
                  {id:8,name:"banana",calories:139},
                  {id:9,name:"coconut",calories:109},
                  {id:10,name:"pineapple",calories:100}];
  





  return(
    <>
    
    <Header/>
    <Food/>
    <Card/>
    <Student name="yashashwani" age={19}isStudent={true}/>
    
    <UserGreeting isLogged={false} username="yashashwani"/>
    <UserGreeting isLogged={true}/>
    {fruits.length>0 ?<List item={fruits} category="fruits"/>:null}
    {vegetables.length>0 &&<List item={vegetables} />}
    <Button/>
    <ProfilePicture/>
    <MyComponent/>
    <Counter/>
    <FormElement/>
    <ColorPicker/>
    <UpdateObject/>
    <StateArray/>
    <CarObject/>
    <ToDoList/>
    <UseEffect/>
    <WidthHeight/>
    <DigitalClock/>
    <ComponentA/>
    <UseRef/>
    <StopWatch></StopWatch>
    <Footer/>
    </>
  )
  
}

export default App
