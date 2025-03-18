import React from 'react'
import { Useform} from '../hooks/useform'

export const Todoadd = ({ onnewtodo }) => {

    const { description, nombre, oninputchange, onresetform} = Useform({
        description: '',
        nombre: '',
    })
    const onformsubmit = ( event ) => {
        event.preventDefault();
        
        if( description.trim().length === 0 || nombre.trim().length === 0 ) return;

        const newtodo = {
            id: new Date().getTime(),
            done: false,
            description,
            nombre,
        }
        
        onnewtodo(newtodo);
        onresetform();
    }

  return (
    <form onSubmit={ onformsubmit }>
        <input 
            type='text'
            placeholder='nombre de la tarea'
            className='px-4 mt-4 ml-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500'
            name='nombre'
            value={nombre}
            onChange={oninputchange}
        />
        <input 
            type='text'
            placeholder='¿ que hay que hacer ?'
            className='px-4 mt-4 ml-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500'
            name='description'
            value={description}
            onChange={oninputchange}
        />
        
        
        
        
        <div>
            <button 
            type='submit'
            className='block mt-4 ml-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300'
            >
            agregar
            </button>
        </div>
        

    </form>
  )
}
