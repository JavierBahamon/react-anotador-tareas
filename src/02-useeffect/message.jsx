import { useEffect, useState } from "react"



export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    useEffect(() => {
      
       const onmousemove = ({ x, y }) => {
        // const coords = { x, y };
        setCoords({ x, y });
       }
      
      window.addEventListener( 'mousemove', onmousemove );
    
      return () => {
        // window.removeEventListener( 'mousemove', onmousemove );
      }
    }, [])
    



  return (
    <>
        <h3 className="p-4 bolic italic">USUARIO YA EXISTE</h3>

        {JSON.stringify(coords)}
    </>
    
  )
}
