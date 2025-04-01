import React from 'react'
import { Todoitem } from './todoitem'

export const Todolist = ( {todos = [], ondeletetodo, ontoggletodo} ) => {
    
  return (
    <>
        <ul >
             {
                todos.map( todo => (
                    <Todoitem key={todo.id} todo={todo} ondeletetodo={ ondeletetodo } ontoggletodo={ontoggletodo}/>
                ))
            }
                        
                        
        </ul>
    
    </>
  )
}
