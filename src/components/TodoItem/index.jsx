import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { del, update} from '../../redux/actions';

import styles from './styles.module.sass';



// here we check if the edit button is pressed if so we display a text input field so that the user can edit the text
// and the button title will be update, if not we display the todo name in a text field and the button title will be edit
// we also check if the compelete button is pressed if so we display a custom text style (the word will be crossed over), if not the default style will be displayed
// then if we pressed the delete button the delete action will be dispached



function TodoItem({todo}) {
  const [edit,setEdit] = useState(false);
  const [done,setDone] = useState(false);
  const [name,setName] = useState(todo.name);

  let dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.card}>
      {edit ? 
      <input
          type='text'
          placeholder={todo.name}
          className={styles.input}
          value={name}
          onChange={
            (e)=> setName(e.target.value)
          }
          
      /> 
      : 
            <h2 className={done ? styles.completed : styles.title}>{todo.name}</h2>
          }

      </div>
      

      <div className={styles.card}>


      <button 
      className={styles.completeBtn}
      onClick = {()=>{setDone(!done)}}
      >Complete</button>


      <button 
      className={styles.deleteBtn}
      onClick = {()=>dispatch(del(todo.id))}
      >Delete</button>


      <button 
      className={styles.editBtn}
      onClick = {()=>{

        dispatch(update(
          {
            ...todo,
            name:name,
          }
        ));

        if (edit){
          setName(todo.name);
        }
        
        setEdit(!edit);
        
      }}
      >
        { edit ? 'Done' : 'Edit '}</button>
          </div>
     
    </div>
    
  );
}

export default TodoItem;
