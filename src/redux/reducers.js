import {ADD, UPDATE, DEL} from './actions';


// if the action is add then the state is mapped into a new TodoList, then the payload which is the todo is pushed
// into this TodoList, and the new TodoList is returned

// if the action is update then the state is mapped into a new TodoList, then we search through the list untill we reach the desired item to 
// update then change it's payload (which is it's title) then the new TodoList is returned

// if the action is delete then the state is mapped into a new TodoList, then we filter through the list with the item id the delete it
// then the new TodoList is returned

export let reducer = (state = [], action)=>{
    let newTodos ;
    switch (action.type){
        case ADD:
            newTodos=[...state];
            newTodos.push(action.payload);
            return newTodos; 
            
            
        case UPDATE:
            newTodos=[...state];
            let index = -1;
            for (let i=0; i< newTodos.length; i++){
                index ++;
                if (newTodos[i].id == action.payload.id){
                    break;
                }
            }
            if (index != -1) {
                newTodos[index]=action.payload;
            }
            return newTodos;

            
        case DEL:
            newTodos = [...state];
            newTodos=newTodos.filter(todo => todo.id != action.payload)
            return newTodos;    
    }
    return state;
}