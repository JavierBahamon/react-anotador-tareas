import React from 'react'
import { usefetch } from '../hooks/usefetch'
import { useCounter } from '../hooks/usecounter';
import { Loadingmessage } from './loadingmessage';
import { Pokemoncard } from './pokemoncard';


export const Multiplecustomhook = () => {
    
    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, haserror, isloading } = usefetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    
  return (
    <>
            

        <h1 className='font-mono text-2xl italic  p-8 bg-cyan-500' >Informacion de pokemon</h1>
        <hr />
        
        { isloading ? 
        <Loadingmessage /> 
        : (  
            <Pokemoncard 
                id={ counter } 
                name={ data.name }
                sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ]}
            /> 
        )}
         
        
        
        
        <button onClick={ () =>  increment()} className=' block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'>
            siguiente
        </button>
        <button onClick={ () => counter > 1 ? decrement() : null } className='block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'>
            anterior
        </button>
        <button onClick={ () => reset() } className='block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'>
            desde el primero
        </button>
    
    </>
  )
}
