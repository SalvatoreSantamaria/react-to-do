// this file is the root of the entire application

import React, { useState } from 'react' // using use state hook so we can use in function component
import TodoList from './TodoList' // have to import

// returning TodoList component - this is jsx
// don't put comments below
// to return more than 1 thing, wrap inside of empty element, called a fragment
function App() {
  //destructuring. first element is all of the todos inside of the todos state, second element is function to update todos
  const [todos, setTodos] = useState(['one', 'two']) //need to pass useState hook the default. useState returns an array, so can destructure
  const [x] = useState(['1']) // could use this variable as well

  // all components have props that we can pass
  // <TodoList todosProp={todos}/> : we have a prop todos on our todoList.js ie TodoList todosprop={todosvariable}
  return (
    <>
    <TodoList todosProp={todos}/> 
    <input type="text" />
    <button>Add To Do</button>
    <button>Clear Completed To Do</button>
    <div>0 Left To Do</div>
    </>
  );
}

export default App;
