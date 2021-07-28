import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

function Todo({ todo, index, removeTodo }) {
  const { theme } = useContext(ThemeContext);

    return (
      <div
        className={`todo ${theme}-todo-bg`}
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        
        {todo.text} 
        <div>
          <button>{todo.status} </button> 
          <button style={{marginLeft: '5px'}} onClick={() => removeTodo(index)}> x</button>
        </div>
      </div>
    );
}

export default Todo;