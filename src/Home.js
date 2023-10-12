import React, { useState, useEffect } from 'react';



function Home({ currentUser }) {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');


  useEffect(() => {
    // Fetch user-specific tasks based on currentUser
    const userTasks = JSON.parse(localStorage.getItem(`tasks_${currentUser.username}`)) || [];
    setTasks(userTasks);
  }, [currentUser]);

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = { 
        id: Date.now(), // Use a unique ID for tasks
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');

      // Save user-specific tasks to localStorage
      localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify([...tasks, newTask]));
    }
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setShowOptions(null);

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };

  const handleSelectTask = (taskId) => {
    const isSelected = selectedTasks.includes(taskId);
    if (isSelected) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const handleBatchComplete = () => {
    const updatedTasks = tasks.map((task) =>
      selectedTasks.includes(task.id) ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    setSelectedTasks([]);

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };
  const handleBatchInComplete = () => {
    const updatedTasks = tasks.map((task) =>
      selectedTasks.includes(task.id) ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
    setSelectedTasks([]);

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };

  const handleBatchDelete = () => {
    const updatedTasks = tasks.filter((task) => !selectedTasks.includes(task.id));
    setTasks(updatedTasks);
    setSelectedTasks([]);

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    setEditedTaskText(null);
    

    // Update user-specific tasks in localStorage
    localStorage.setItem(`tasks_${currentUser.username}`, JSON.stringify(updatedTasks));
  };

  return (
    <div className="task-list">
      <h1>Task List for {currentUser.username}</h1>
      <div className="task-actions">
    
        <input
          type="text"
          placeholder="New Task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      
        
      </div>
      {selectedTasks.length > 0 && (
          <div className="batch-actions">
            <button onClick={handleBatchComplete}>Mark as Complete</button>
            <button onClick={handleBatchInComplete}>Mark as Incomplete</button>
            <button onClick={handleBatchDelete}>Delete</button>
          </div>
        )}
      <ul className="task-items">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onMouseEnter={() => setShowOptions(task.id)}
            onMouseLeave={() => setShowOptions(null)}
          >
            <div>
            <input
              type="checkbox"
              checked={selectedTasks.includes(task.id)}
              onChange={() => handleSelectTask(task.id)}
            />
            {editingTask === task.id ? (
              <div className="edit-task">
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) =>setEditedTaskText(e.target.value)}
                />
                <button onClick={() => handleEditTask(task.id, editedTaskText)}>Save</button>
              </div>
            ) : (
              <>
                {task.text}
                {showOptions === task.id && (
                  <div className="task-options">
                    <button onClick={() => handleToggleComplete(task.id)}>
                      {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    <button onClick={() => setEditingTask(task.id) }>Edit</button>
                  </div>
                )}
              </>
            )}
            </div>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Home;
