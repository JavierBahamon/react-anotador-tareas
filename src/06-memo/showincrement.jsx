import React from 'react'

export const Showincrement = React.memo( ({ increment }) => {
    
    console.log('me volvi a generar');

  return (
    
    <button
    onClick={ () => {
            increment( 5 );
    }}>
        incrementar
    </button>
  )
})
