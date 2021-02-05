import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React , {useEffect, useState} from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos]=useState([])
  const [input, setInput]=useState('');

  
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=> ({id: doc.id ,todo: doc.data().task})))
    })
  }, []);

  const addTodo=(event)=>{
    //to prevent refreshing of the page on clicking enter...
    event.preventDefault();
    db.collection('todos').add({
      task:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>Hello Word!!!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Task
        </Button>
      </form>
      
      <ul>
        {todos.map(todo=>(
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
