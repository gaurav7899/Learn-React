import './App.css'
import { useState } from 'react'
function App() {
  // change state 
  let [counter,setcounter] = useState(0)

  function addvalue(){
    // counter = counter + 1
    setcounter(counter+1)
    if (counter===20){
        setcounter(counter)
      }
  }

  const removevalue = ()=>{
    setcounter(counter - 1)
    if (counter===0){
      setcounter(counter)
    }
  }
  return (
    <>
    <div className="mt-40 flex items-center justify-center flex-col gap-4">
     <h1 className="font-semibold text-3xl">React App</h1>
     <h2 className="font-sans text-2xl">Counter value:{counter}</h2>
     <div className=" flex gap-3">
     <button className="bg-blue-600 text-2xl text-amber-100 rounded-xl px-1.5 py-1" onClick={addvalue}>Add value</button>
     <button className="bg-blue-600 text-2xl text-amber-100 rounded-xl px-1.5 py-1" onClick={removevalue}>Remove value</button>
     </div>
    </div>
    </>
  )
}

export default App
