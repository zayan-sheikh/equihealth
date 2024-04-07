import React from 'react'
import "./Tasks.css"

function Tasks() {
  const taskArray = ["drink water", "take a walk", "go on a run",
                    "read a book", "journal", "reach out to an old friend",
                    "message a loved one", "cook a healthy meal", "spend 10 min outdoors"];
  
  var task1 = Math.floor(Math.random() * taskArray.length);
  var task2 = Math.floor(Math.random() * taskArray.length);
  var task3 = Math.floor(Math.random() * taskArray.length);

  while (task2 == task1 || task2 == task3) {
    task2 = Math.floor(Math.random() * taskArray.length);
  }

  while (task3 == task1) {
    task3 = Math.floor(Math.random() * taskArray.length);
  }
  
  return (
    <div className="tasks-background">
      <h1>Tasks</h1>

      <div className="task-list">
        <div className="task">
          <p>{taskArray[task1]}</p>
          <p>{taskArray[task2]}</p>
          <p>{taskArray[task3]}</p>
        </div>
      </div>
    </div>
  )
}

export default Tasks
