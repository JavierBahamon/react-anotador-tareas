import { useState } from "react";

export const Useform = ( initialform = {} ) => {

    const [formstate, setformstate] = useState( initialform);

    
      const oninputchange = ( {target} ) => {
        
        const { name, value } = target;
        
        setformstate({
          ...formstate,
          [ name ]: value,
        });
      }
      const onresetform = () =>{
            
        setformstate(initialform);
      }

    

  return {
    ...formstate,
    formstate,
    oninputchange,
    onresetform,

  }
}
