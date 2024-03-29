import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

import About from "../Pages/About"
import NotMatch from "../Pages/NotMatch"
import Navbar from "./Navbar";

const TodoContainer = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    // storing todos items
    getInitialTodos()
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    // getting stored items
    fetch('http://localhost:3001/tasks')
    .then(response => response.json())
    .then(data => setTodos(data));
    // const temp = localStorage.getItem("todos")
    // const savedTodos = JSON.parse(temp)
    // return savedTodos || [] 
  }
 
  const handleChange = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (   
    <>
      <Navbar />
    <Header />
    
    <InputTodo addTodoProps={addTodoItem} />
      <Routes>
        <Route path="/" element={<TodosList 
      todos={todos} 
      handleChangeProps={handleChange} 
      deleteTodoProps={delTodo}
      setUpdate ={setUpdate} 
    />}>
          {/* <div className="container">
            <div className="inner"> */}
            {/* </div>
          </div> */}
        </Route>
        <Route path= "/About" element={<TodosList 
      todos={About} 
      handleChangeProps={handleChange} 
      deleteTodoProps={delTodo}
      setUpdate ={setUpdate} 
    />}>
        </Route>
        <Route path="*" element={<TodosList 
      todos={NotMatch} 
      handleChangeProps={handleChange} 
      deleteTodoProps={delTodo}
      setUpdate ={setUpdate} 
    />}>
        </Route>
      </Routes>
    </>
  );
}

export default TodoContainer