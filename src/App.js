// this file is the root of the entire application

import React, { useState, useRef, useEffect } from 'react' // using use state hook so we can use in function component
// useRef hook is so we can reference elements inside of html
// useEffect is to save in storage

import TodoList from './TodoList' // have to import
//import uuidv4 from 'uuid/v4'  //this does not work
const { v4: uuidv4 } = require('uuid');//give access to uuid so we can generate random ids

// returning TodoList component - this is jsx
// don't put comments below
// to return more than 1 thing, wrap inside of empty element, called a fragment
function App() {
  //destructuring. first element is all of the todos inside of the todos state, second element is function to update todos
  const [todos, setTodos] = useState([]) //need to pass useState hook the default. useState returns an array, so can destructure
  const toDoNameRefVariable = useRef()
  const [x] = useState(['1']) // could use this variable as well

  const LOCAL_STORAGE_KEY = 'local_storage_key'

  //loads todos, only call once
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // get list of to dos, parse it so it becomes an array
    if (storedTodos) {
      setTodos(storedTodos)  // set list of to dos only if we have stored to dos
    }
  }, []) // because empty array never changes, it will never get called again

  //save in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) // localStorage needs a key
  }, [todos]) //anytime something in array changes, we want to call useEffect(). ie, any time array of todos changes, save todos

  function toggleTodoFunction(id) {
    const newT = [...todos] //get new list of todos, which is a copy of the current list. In React, make sure you copy state variables and use the copy to set the new state
    const something = newT.find(x => x.id === id)
    something.complete = !something.complete //toggle make the current state opposite to itself
    setTodos(newT) // update the to do list
  }

  function handleAddTodo(e) {
    const name = toDoNameRefVariable.current.value //accessing element value inside of input ref = { toDoNameRefVariable }
    if (name === '') return
    console.log(name)

    setTodos(prevTodos => {
      return [...prevTodos, { id:uuidv4(), name: name, complete: false} ]
    })

    toDoNameRefVariable.current.value = null //clear out the input
  }

  function handleClearTodoFunction(e) {
    const keepOnlyUncheckedTodos = todos.filter(x => !x.complete) 
    setTodos(keepOnlyUncheckedTodos)
  }

  // all components have props that we can pass
  // <TodoList todosProp={todos}/> : we have a prop todos on our todoList.js ie TodoList todosprop={todosvariable}
  
  // toggleTodo is passing down toggleTodo function for the Todolist component 

  // for state hook: basic notes:
  // when update state, it rerenders. 
  const [firstthinginarrayisalwayscurrentstate, functionthatallowsustoupdatethatcurrentstate] = useState(0)
  //const [firstthinginarrayisalwayscurrentstate, functionthatallowsustoupdatethatcurrentstate] = useState(() => {
    //console.log('if state is used this way, it will only be run once on loading, not repeatedly like the other one)
  //})


  //additional notes about state and passing in objects in state **********************//
  //const [firstthinginarrayisalwayscurrentstate, functionthatallowsustoupdatethatcurrentstate] = useState({count: 0})

  // function decrementCount() {
  //   functionthatallowsustoupdatethatcurrentstate(thisispreviousvalue => {
  //     return { ...thisispreviousvalue, count: thisispreviousvalue.count - 1) //have to ...spread out previous state and then set new state
  // }
  //additional notes about state and passing in objects in state **********************//

  function decrementCount() {
    functionthatallowsustoupdatethatcurrentstate(thisispreviousvalue => thisispreviousvalue - 1)
  }

  function incrementCount() {
    functionthatallowsustoupdatethatcurrentstate(thisispreviousvalue => thisispreviousvalue + 1)
  }


  return (
    <>
    <TodoList todosProp={todos} toggleTodoProp={toggleTodoFunction}/> 
    <input ref= { toDoNameRefVariable } type="text" />
    <button onClick={ handleAddTodo }>Add To Do</button>
    <button onClick={ handleClearTodoFunction }>Clear Completed To Do</button>
    <div>{todos.filter(x => !x.complete).length} left to do</div>
    <p>Hooks only function inside function components, (and not classes, ie class App extends... and must always execute in same order</p>

    <button onClick={decrementCount}>-</button>
    <span>{firstthinginarrayisalwayscurrentstate}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
