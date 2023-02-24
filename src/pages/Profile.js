import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Form } from 'react-bootstrap';
import Todo from '../components/Todo';
import FormTodo from '../components/TodoForm';





const Profile=()=> {

    const user = localStorage.getItem("email")
    console.log(user)
    const navigate = useNavigate()
    
    useEffect(() => {
      if(!user){
        navigate("/login")
      }
    }, [user])
    

  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


useEffect(() => {
    fetch('http://localhost:3000/Task', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      

    })
    .then((res) => {
       return res.json()})
    .then((result) =>{
      console.log(result)
      setTodos(result)
      })
        .catch((error) =>{
            // toast.error('Failed !'+error.message)
        })
}, [])



  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
            
          {todos.map((todo, index) => (
            <Card>
                
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;