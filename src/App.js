import React, { useEffect, useState } from 'react';
import ThemeContext from './theme/ThemeContext';
import Header from './Header';
import useTodosData from './todos/useTodosData';
import Todo from './todos/Todo';
import TodoForm from './todos/TodoForm';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };
  const initialTodos = useTodosData();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);

  const addTodo = text => {
    const newTodos = [...todos, text];
    console.log('newTodos',newTodos);
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={`app ${theme}-bg`}>
      <ThemeContext.Provider value={value}>
        <Header />
        <div className='todo-list'>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
