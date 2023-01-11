import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './Components/Info'
import About from './Components/About'
import Footer from './Components/Footer'
import Profile from './Components/Profile'

function App() {
  const [on, setOn] = useState({on:true})



  const styles = {
    backgroundColor : on.on ? "#222222" : "white",
    color : on.on ? "white" : "#222222"
  }

  

  const handleClick = () =>{
    setOn(prevOn => {
      return{
        ...prevOn,
        on: !prevOn.on
      }
    })

    
}

  return (
   <div className="main-container"  style={styles} onClick={handleClick}>
        <Profile />
        <Info style={styles}/>
        <About style={styles} />
        <Footer style={styles} />
   </div>
  )
}

export default App
