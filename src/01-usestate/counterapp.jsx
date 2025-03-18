import { useState } from "react"


export const Counterapp = () => {

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,

  });
  const {counter1, counter2, counter3} = state;
  
  

  
  return (
    <>
    
        <h1 className="p-8 text-2xl">counter: { counter1 }</h1>
        <h1 className="p-8 text-2xl">counter: { counter2 }</h1>
        <h1 className="p-8 text-2xl">counter: { counter3 }</h1>
        <hr />
       
        <button className=" p-8" onClick={
             () => setCounter({
                ...state,
                counter1: counter1 + 1,
                
             }) 
            }>+1</button>
    </>
  )
}
