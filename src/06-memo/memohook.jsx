import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/usecounter'


const heavystuff = ({ iterationnumber = 100 }) =>{
    for ( let i = 0; i < iterationnumber; i++ ){
        console.log( 'ahi vamos');
        
    }
    return `${ iterationnumber } iteraciones realizadas`;

}

export const Memohook = () => {

    const { counter, increment } = useCounter( 10 );
    
    const [show, setshow] = useState(true);

    const memorizedvalue = useMemo( () => heavystuff(counter), [counter])
  return (

    <>
        <h1>counter <small>{ counter }</small> </h1>

        <hr /> 
        <h4>{ memorizedvalue }</h4>

        <button
        className='block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'
        onClick={ () => increment() }
        > +1 </button>

        <button
            className='block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'
            onClick={ () => setshow( !show )}
        >show/hide { JSON.stringify(show)}</button>
    
    
    </>

  )
}
