import React from 'react'

export default function ToDoComponent( { todoelement }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={ todoelement.complete } />
        { todoelement.name }
      </label>

    </div>
  )
}