import React, { useState } from 'react'
import { useCounter } from '../hooks/usecounter'
import { Small } from './small';

export const Memorize = () => {

    const { counter, increment } = useCounter( 10);
    
    const [show, setshow] = useState(true)
  return (

    <>
        <h1>counter <Small value={ counter }/> </h1>

        <hr /> 

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
