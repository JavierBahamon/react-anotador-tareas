import React, { useCallback, useState } from 'react'
import { Showincrement } from './showincrement';

export const Callbackhook = () => {

    const [counter, setcounter] = useState( 10 );
    

     const incrementfather = useCallback(
      (value) => {
        setcounter( (c) => c + value );  
      },
      [],
    )
    
    // const increment = () => {
    //     setcounter( counter + 1 );
        
        
    // }

  return (
    <>
    
        <h1>usecallback hook { counter }</h1>
            
        <hr />

        <Showincrement increment={ incrementfather }/>
    </>
  )
}
