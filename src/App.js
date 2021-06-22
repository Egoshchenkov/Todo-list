import './App.css';
import TodoList from './Todo/TodoList'
import React from 'react';
import Context from './context';
import AddTodo from './Todo/AddTodo';
// import Test1 from './Test1';
import Test2 from './Test2';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, tittle: 'Купить хлеб'},
    {id: 2, completed: false, tittle: 'Купить масло'},
    {id: 3, completed: false, tittle: 'Купить молоко'},
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if ( todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(tittle) {
    setTodos(todos.concat([{
      tittle,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <Test2 arg={77}/>
    <div className="wrapper">
      <h1>
        React tutorial
      </h1>
      <AddTodo onCreate={addTodo}/>
    {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>no todos</p>}
      
    </div>
    </Context.Provider>
  );
}

export default App;
