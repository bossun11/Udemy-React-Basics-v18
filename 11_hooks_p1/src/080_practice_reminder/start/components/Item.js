import { useState } from 'react'

export const Item = ({ todo, complete, updateTodo}) => {

  const [editingContent, setEditingContent] = useState(todo.content);

  const changeContent = e => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  }

  const confirmContent = e => {
    e.preventDefault();
    const newTodo = { ...todo, content: editingContent, editing: !todo.editing };
    updateTodo (newTodo);
  }

  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: 'inline' }}>
        {todo.editing ? (
          <input value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  )
}