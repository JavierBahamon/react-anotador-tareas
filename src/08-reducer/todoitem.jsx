import React from 'react'

export const Todoitem = ({ todo, ondeletetodo, ontoggletodo }) => {


  return (
    <li className="rounded-lg shadow-md px-4 py-2 mt-4 flex flex-col items-center text-center">
      
      <div>
        <span 
          className={`p-2 text-xl font-bold ${todo.done ? "underline"  : ""} `}
          onClick={() => ontoggletodo(todo.id)}
        >
          {todo.nombre}
        </span>
      </div>

      
      <div>
        <span 
          className={`p-2 text-sm ${todo.done ? "underline" : ""}`}
          onClick={() => ontoggletodo(todo.id)}
        >
          {todo.description}
        </span>
      </div>
      {todo.done && 
        <p className="text-green-600 text-sm mt-2 animate-pulse">
          ✔ Tarea completada
        </p>
      }
      
    
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-rose-500 text-white rounded-lg shadow-md transition duration-300"
        onClick={() => ondeletetodo(todo.id)}
      >
        Borrar
      </button>
    </li>


  )
}
