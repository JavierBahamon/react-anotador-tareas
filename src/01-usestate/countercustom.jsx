import { useCounter } from "../hooks/usecounter"


export const Countercustom = () => {

    
    const { counter, increment, decrement, reset } = useCounter();  

  return (
    <>
        <div className=" italic text-2xl bold p-8">Countercustom: { counter }</div>
        <hr />
        
        <button onClick={ () => increment(2) } className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300 " >+1</button>
        <button onClick={ () => decrement(2)  } className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300 " >-1</button>
        <button onClick={ reset } className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300 " >reset</button>

    </>
    

  )
}
