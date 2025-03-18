import React, { useEffect } from 'react';
import { Todolist } from './todolist';
import { Todoadd } from './todoadd';
import { usetodo } from '../hooks/usetodo';
import { useCounter } from '../hooks/usecounter';


export const Todoapp = () => {

    const { todos, handledeletetodo, handlenewtodo, handletoggletodo, counter } = usetodo();
    
    

    return (
        <div className="p-8 flex flex-col items-center gap-8">
            
            
            <h2 className="text-2xl font-bold text-center">
                Tareas <span className="text-black-500">({counter})</span>
            </h2>

            <div className="w-full flex gap-8">
                
                <div className="w-1/3 bg-gray-100 rounded-lg shadow-lg p-6 flex-shrink-0 h-fit">
                    <h4 className="text-lg font-bold italic ml-4 mb-4">Agregar Nueva Tarea</h4>
                    
                    <Todoadd onnewtodo={handlenewtodo} />
                </div>
                

                
                <div className="w-2/3 mx-auto grid grid-cols-3 gap-6 place-items-center">
                        {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="bg-white text-center p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full min-h-[200px] gap-2"
                    >
                        <Todolist
                            todos={[todo]}
                            ondeletetodo={handledeletetodo}
                            ontoggletodo={handletoggletodo}
                        />   
                    </div>
                        ))}
                </div>




            </div>
        </div>
    );
};
