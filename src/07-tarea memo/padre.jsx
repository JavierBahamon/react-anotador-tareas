import { useCallback, useState } from 'react'
import { Hijo } from './hijo'


export const Padre = () => {

    const numeros = [ 2, 4, 6, 8, 10];
    const [ valor, setvalor ] = useState(0);


    const incrementar = useCallback(
      ( num ) => {
        setvalor( (valor) => valor + num)
      },
      [],
    )
    
    

  return (
    <div>
            <h1>padre</h1>
            <p> total {valor}</p>
            <hr />

            {

                numeros.map( n => (
                    <Hijo
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />

                ))
            }

    </div>
  )
}
