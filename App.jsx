
import { useState } from 'react'
import './App.css'
import Studentcard from './assets/components/Studentcard'



function App() {
  const [count, setCount] = useState(0)
function increment(){
  setCount( count + 5)
}
function decrement(){
  
  setCount(count -  5
)}


if(count>20){
   alert("max limit exceed  ")
} if(count < 0){
  alert("min limit exceed ")
}
  return (
    <>
  <Studentcard Name = "Rinki"
  Course = "Bca"
  Roll = "101" 
  />
  <Studentcard Name = "Rinku"
  Course = "Mca"
  Roll = "102" 
  />
  <h1>{count}</h1>
<button  className='Heey' onClick={increment}>INCREMENT</button>
<button className='Heey' onClick={decrement}>DECREMENT</button>
  </>
  )
}

export default App
