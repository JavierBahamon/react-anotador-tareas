

export const todoreducer = ( initialstate = [], action ) =>{


    switch (action.type) {
        case 'add':
             
            return [ ...initialstate, action.payload]
        case 'remove':
            return initialstate.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return initialstate.map( todo => {

            if ( todo.id === action.payload ){
                return{
                    ...todo,
                    done: !todo.done,
                }
                
            }
            return todo;
        });


    
        default:
           return initialstate;
    }
}