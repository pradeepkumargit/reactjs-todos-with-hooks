import { useState, useRef, useEffect } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const taskRef = useRef();
    const [status, setStatus] = useState('');
    const statusRef = useRef();

    useEffect(() => {
        taskRef.current.focus();
      }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (!task && !status) return;
        console.log('task',task);
        addTodo({
            text: task, 
            status:status
        });
        setTask('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <hr/>
            <div className="task">
                <span className="task-heading">Task Name</span>
                <input
                    type="text"
                    className="input"
                    value={task}              
                    onChange={e => setTask(e.target.value)}
                    ref={taskRef}
                />
            </div>
            <div className="task">
                <span className="task-heading">Task Status</span>
                <input
                    type="text"
                    className="input"
                    value={status}              
                    onChange={e => setStatus(e.target.value)}
                    ref={statusRef}
                />
            </div>
            <button onClick={handleSubmit}>Add Task</button>
        </form>
    );
}

export default TodoForm;