import { useState, useEffect } from "react"

const localcache = {};

export const usefetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isloading: true,
        haserror: false,
        error: null,
    })

    useEffect(() => {
      getfech();

    }, [url])

    const setloadingstate = () => {

        setstate({
            data: null,
            isloading: true,
            haserror: false,
            error: null,
        });
    }
    

    const getfech = async() => {

        if( localcache[url] ){
            console.log('usando cache');
            setstate({
                data: localcache[ url ],
                isloading: false,
                haserror: false,
                error: null,
            });
            return;
        }

        setloadingstate();
        const resp = await fetch( url );
        
        await new Promise( resolve => setTimeout(resolve, 1000) );

        if( !resp.ok ){
            setstate({
                data: null,
                isloading: false,
                haserror: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            });
            return;
        }
        
        const data = await resp.json();
        console.log({data});

        setstate({
            data: data,
            isloading: false,
            haserror: null,
        })

        // manejo de cache
        localcache[ url ] = data;

    }


    return {
        data: state.data,
        isloading: state.isloading,
        haserror: state.haserror,
    }
}
