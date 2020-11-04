import React from 'react'

export default function ToDoComponent( { todoelement, toggleTodoGoesToToDoComponent }) {

  function handleTodoClick() {
    toggleTodoGoesToToDoComponent(todoelement.id)
  }
    return (
    <div>
      <label>
        <input type="checkbox" checked={ todoelement.complete } onChange={handleTodoClick} />
        { todoelement.name }
      </label>

    </div>
  )
}