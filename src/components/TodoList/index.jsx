import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';

function TodoList() {

  let todos = useSelector(state=> state)
  return (
    <div>

      {/* here we map todos and with every todo we display a todo item and pass the id as its key  */}
      {todos.map(todo =>{
        return<TodoItem 
        key = {todo.id} 
        todo={todo}
        />
      })}
    </div>
  );
}

export default TodoList;
