import React, { useEffect, useReducer } from 'react'
import { todoreducer } from '../08-reducer/todoreducer';
import { useCounter } from './usecounter';






const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const usetodo = () => {

        
        const [todos , dispatch] = useReducer( todoreducer, [], init );
        const { counter, increment, decrement } = useCounter(todos.length);
        
            useEffect(() => {
              localStorage.setItem('todos', JSON.stringify( todos ))
            }, [todos])
            
        
            const handlenewtodo = ( todo ) => {
                const action = {
                    type: 'add',
                    payload: todo,
                }
                dispatch( action );
                increment();
            }
            const handledeletetodo = ( id ) => {
                dispatch({
                    type: 'remove',
                    payload: id,
                })
                decrement();
        
            }
            const handletoggletodo = ( id ) => {
                console.log({id});
                
                dispatch({
                    type: 'toggle',
                    payload: id,
                })
        
            }
            
        


  return {
    handledeletetodo,
    handlenewtodo,
    handletoggletodo,
    todos,
    counter,
  }
}
