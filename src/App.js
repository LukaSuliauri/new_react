import React from 'react';
import {useState} from 'react'
import './App.css';
import{ v4 as uuid} from 'uuid'
import Todo from './Components/Todo';
import CountTodo from './Components/CountTodo';
import EditTodo from './Components/EditTodo';
function App() {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState ('')
    const [selectedTodo, setSelectedTodo] = useState(null)

    const addTodo = () => {
      const newTodo = {
            id: uuid(),
            text: todo,
            isChecked: false

      }
      if(newTodo.text.trim().length < 3){window.alert('There must be at list 3 symbol')}
      else{
          setTodos([...todos, newTodo])
          setTodo( '')
      }

    }

    const deleteTodo = (id) => {
        if(window.confirm('Are You Sure ?'))
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const darkMode = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo ))
    }

    const editTodo = (id) => {
        setSelectedTodo(todos.find(todo => todo.id === id))
    }

    const updateTodo = (updatedTodo) => {

        setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo ))
        setSelectedTodo(null)
    }



    return(
    <div className="App">
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-10">
            <input type="text" className="form-control" id="todo"  placeholder="Todo Title" value={todo} onChange={(e) => {setTodo(e.target.value)}}></input>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary w-100" id="add-todo" onClick={addTodo}>
                <i className="fa-solid fa-floppy-disk"></i>
            </button>
          </div>
            <div className="col-sm-1">
                {<CountTodo todos={todos} />}
            </div>
        </div>
        <div className="todo-row d-flex flex-wrap my-5">
            {todos.map(todo => <Todo key={todo.id} todo={todo}  deleteTodo={deleteTodo}  darkMode={darkMode} editTodo={editTodo}/>) }
        </div>
          <div className="row">
              {selectedTodo && <EditTodo todo={selectedTodo} updateTodo={updateTodo} />}
          </div>
      </div>
    </div>
  )
  ;
}

export default App;

