import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo, startEditing, saveEdit, editId, editText, setEditText }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 0'
      }}
    >
      {editId === todo.id ? (
        
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => saveEdit(todo.id)}>Save</button>
          <button onClick={() => setEditText('')}>Cancel</button>
        </>
      ) : (
      
        <>
          <span onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
            {todo.text}
          </span>
          <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default Todo;
