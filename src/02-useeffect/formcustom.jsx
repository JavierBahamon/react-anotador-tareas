import { useState, useEffect  } from "react";
import { Message } from "./message";
import { Useform } from "../hooks/useform";





export const Formcustom = () => {


    const { formstate, oninputchange, onresetform, username, email, password } = Useform({
        username: '',
        email: '',
        password: ''

      })
      
      // const {username, email, password } = formstate;
      
      

  useEffect(() => {
    console.log('emailchange');
  }, [email]);
  useEffect(() => {
    console.log('emailchange');
  }, [email]);


  

  return (
    <>
    
        <div className="p-8 text-2xl bold italic">formulario con custom hook</div>

        <hr />

       
        <input 
            type="text"
            className="mt-6 ml-4 px-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ oninputchange }
        />

   
        <input 
            type="text"
            className="mt-6 ml-4  px-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500"
            placeholder="helloworld@gmail.com"
            name="email"
            value={ email }
            onChange={ oninputchange }
        />
   

        <input 
            type="password"
            className="mt-6 ml-4  px-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500"
            placeholder="contraeña"
            name="password"
            value={ password }
            onChange={ oninputchange }
        />

        
        {
          (password === 'jasanty' ) && <Message />
          
        }
        
        <button onClick={ onresetform} className="block ml-4 mt-4 px-4 py-2 bg-indigo-600 hover:bg-cyan-500 text-white rounded-lg shadow-md transition duration-300">borrar</button>
        
    
    </>
   

  )
}


