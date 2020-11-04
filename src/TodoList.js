import React from 'react'
import ToDoComponent from './ToDoComponent'

export default function TodoList({ todosProp, toggleTodoProp }) {
  /* {todosProp.length} */
  // react only needs to update the elements that change, not the whole todo list, hence use a key for efficiency, don't have to use
  // passing in toggleTodo prop into individual todos
  return (
      todosProp.map(x => {
        return <ToDoComponent key={x.id} toggleTodoGoesToToDoComponent={toggleTodoProp} todoelement={x}  />
      })

  )
}