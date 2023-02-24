import { Button } from "react-bootstrap";

const Todo=({ todo, index, markTodo, removeTodo })=> {
    console.log(todo)


    return (
      <div className="todo">
        
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.taskname}</span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.Category}</span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.description}</span>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.time}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }

  export default Todo