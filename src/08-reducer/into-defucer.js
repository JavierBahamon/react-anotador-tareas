

const initialstate = [{
    id: 1,
    todo: ' recolectar la piedra del alma ',
    done: false,
}];


const todoreducer = ( state = initialstate, action = {} ) => {

        if( action.type === 'add'){
            return[ ...state, action.payload];
        }

    return state;

}

let todos = todoreducer();

const newtodo = {
    id: 2,
    todo: ' recolectar la piedra del alma ',
    done: false,
}

const addtodoaction = {
    type: 'add',
    payload: newtodo,
}


todos = todoreducer( todos, addtodoaction );

console.log({state: todos});
