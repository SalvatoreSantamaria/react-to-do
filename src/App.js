// this file is the root of the entire application

import React, { useState, useRef } from 'react' // using use state hook so we can use in function component
// useRef hook is so we can reference elements inside of html
import TodoList from './TodoList' // have to import
//import uuidv4 from 'uuid/v4'  //this does not work
const { v4: uuidv4 } = require('uuid');//give access to uuid so we can generate random ids

// @ 19:17 https://www.youtube.com/watch?v=hQAHSlTtcmY

// returning TodoList component - this is jsx
// don't put comments below
// to return more than 1 thing, wrap inside of empty element, called a fragment
function App() {
  //destructuring. first element is all of the todos inside of the todos state, second element is function to update todos
  const [todos, setTodos] = useState([]) //need to pass useState hook the default. useState returns an array, so can destructure
  const toDoNameRefVariable = useRef()
  const [x] = useState(['1']) // could use this variable as well

  function handleAddTodo(e) {
    const name = toDoNameRefVariable.current.value //accessing element value inside of input ref = { toDoNameRefVariable }
    if (name === '') return
    console.log(name)

    setTodos(prevTodos => {
      return [...prevTodos, { id:uuidv4(), name: name, complete: false} ]
    })

    toDoNameRefVariable.current.value = null //clear out the input
  }

  // all components have props that we can pass
  // <TodoList todosProp={todos}/> : we have a prop todos on our todoList.js ie TodoList todosprop={todosvariable}
  return (
    <>
    <TodoList todosProp={todos}/> 
    <input ref= { toDoNameRefVariable } type="text" />
    <button onClick={ handleAddTodo }>Add To Do</button>
    <button>Clear Completed To Do</button>
    <div>0 Left To Do</div>
    </>
  );
}

export default App;
