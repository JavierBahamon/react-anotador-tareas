import { useRef } from 'react'

export const Focusscreen = () => {

    const inputref = useRef();
    
    const sasa = () => {

        
        inputref.current.select();
    }


  return (
    <>

        <h1>focus screen</h1>
        <hr />

        <input 
            ref={ inputref }
            type='text'
            placeholder='ingrese su nombre' 
        
        />
        
        
        <button onClick={ sasa } className='mt-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'> 
            set focusscreen
        </button>
    
    </>
  )
}
