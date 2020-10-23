import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../../redux/actions'
import styles from './styles.module.sass';



// here we take the todo from the user as input and dispach it to the add action with the name we got from the user and a random id that we set for it



function TodoForm() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <form >
      <input
      onChange={(e)=>setName(e.target.value)}
      value={name}
        type="text"
        placeholder="What do you have to do?"
        className={styles.input}
      />
      <button 
      type = 'submit'
      className={styles.todoBtn}
      onClick = {(e)=>{
        e.preventDefault();

        dispatch( add(
          {
            id:Math.random()*1000,
            name:name
          }
        ));
       
      setName('');
    }}

      >+</button>
    </form>
  );
}

export default TodoForm;
