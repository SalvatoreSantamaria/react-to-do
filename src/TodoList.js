import React from 'react'
import ToDoComponent from './ToDoComponent'

export default function TodoList({ todosProp }) {
  /* {todosProp.length} */
  // react only needs to update the elements that change, not the whole todo list, hence use a key for efficiency, don't have to use
  return (
      todosProp.map(x => {
        return <ToDoComponent key={x} todoelement={x}  />
      })

  )
}