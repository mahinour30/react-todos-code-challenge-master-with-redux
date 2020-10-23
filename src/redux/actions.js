// creating actions

export const ADD = 'ADD';
export const DEL = 'DEL';
export const UPDATE = 'UPDATE';

// add action
export function add (todo){
    return{
        type:'ADD',
        payload:todo,
    }
}

// delete action 
export function del (todoID){
    return{
        type:'DEL',
        payload:todoID,
    }
}

// update action 
export function update (todo){
    return{
        type:'UPDATE',
        payload:todo,
    }
}