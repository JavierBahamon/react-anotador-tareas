import React, { useLayoutEffect, useRef } from 'react'



export const Pokemoncard = ({ id, name, sprites = [] }) => {

    const h2ref = useRef()

    useLayoutEffect(() => {
       
      const { height, width } = h2ref.current.getBoundingClientRect();

      console.log({ height, width });
      
    }, [name])

  return (
    <section>
        <h2 className='text-capitalize p-2 text-2xl' ref={ h2ref }>#{ id } - { name } </h2>
            
        <div className='flex col-4'>
            {
                sprites.map(sprite => (
                    <img key={ sprite } src={ sprite } alt='asd' className='  size-40 shadow-xl rounded-lg border-4 border-gray-700 ml-4'   />
                ))
            }
        </div>
        

    </section>
    
  )
}
