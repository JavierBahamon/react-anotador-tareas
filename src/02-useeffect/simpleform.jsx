import { useState, useEffect  } from "react";
import { Message } from "./message";



export const Simpleform = () => {

  const [formstate, setformstate] = useState({
    username: 'javier',
    email: 'javier@gmail.com',

  });

  const { username, email } = formstate;

  const oninputchange = ( {target} ) => {
    
    const { name, value } = target;
    
    setformstate({
      ...formstate,
      [ name ]: value,
    });
  }

  // useEffect(() => {
  //  console.log('called');
  // }, []);

  // useEffect(() => {
  //   console.log('user change');
  // }, [formstate]);

  useEffect(() => {
    console.log('emailchange');
  }, [email]);

  

  return (
    <>
    
        <div className="p-8 text-2xl bold italic">simpleform</div>

        <hr />

        <div className="p-4">
            <input 
            type="text"
            className="px-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ oninputchange }
        />
        </div>
        <div className="p-4">
            <input 
            type="text"
            className="px-4 py-2 rounded-lg bg-white-800 text-black border border-gray-700 focus:ring-2 focus:ring-gray-500"
            placeholder="helloworld@gmail.com"
            name="email"
            value={ email }
            onChange={ oninputchange }
        />
        </div>
        {
          (username === 'javier' ) && <Message />
        }
        
    
    </>
   

  )
}


