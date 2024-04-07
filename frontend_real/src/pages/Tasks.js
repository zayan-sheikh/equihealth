import React from 'react'
import "./Tasks.css"
import differenceInHours from 'date-fns/differenceInHours'

function Tasks() {
  // WARNING: if you change any of these, make sure to carry out the change in "category" function as well.
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

  const category = (task) => {
    switch(task) {
      case "drink water":
        return "water";
      case "take a walk":
        return "exercise";
      case "go on a run":
        return "exercise";
      case "read a book":
        return "brain";
      case "journal":
        return "brain";
      case "reach out to an old friend":
        return "connect";
      case "message a loved one":
        return "connect";
      case "cook a healthy meal":
        return "food";
      case "spend 10 min outdoors":
        return "exercise";
    }
  }

  var user = {_id: "", streak: 0};
  // var id = "";
  // var streak = 0;

  const fetchStreak = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    const response = await fetch("http://localhost:3001/api/main", requestOptions)
    const json = await response.json()

    if (response.ok) {
        // id = json._id
        // streak = json.streak
        user = json
        return json.streak
    }
}

  // tells us whether we should increase the streak or not
  // returns a boolean. true = we should increase, false = we shouldn't increase
  const incStreak = () => {
    var time = differenceInHours(new Date(), new Date(user.updatedAt));

    return time >= 24;
  }

  const taskPressed = async (taskNo) => {
    var cat = "";
    console.log(taskArray[taskNo]);
    cat = category(taskArray[taskNo]);
    // cat is the correct category of task completed!
    
    var streak = -1;
    streak = await fetchStreak();
    if (incStreak()) {
      streak++;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    console.log(cat);

    switch(cat) {
      case "water":
        raw = JSON.stringify({"streak": streak, "water": user.water + 1});
        break;
      case "food":
        raw = JSON.stringify({"streak": streak, "food": user.food + 1});
        break;
      case "exercise":
        raw = JSON.stringify({"streak": streak, "exercise": user.exercise + 1});
        break;
      case "connect":
        raw = JSON.stringify({"streak": streak, "connect": user.connect + 1});
        break;
      case "brain":
        raw = JSON.stringify({"streak": streak, "brain": user.brain + 1});
        break;
    }
    
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };


    var path = "http://localhost:3001/api/main/";
    var result = path.concat(user._id);
    const response = await fetch(result, requestOptions)
    
  }
  
  return (
    <div className="tasks-background">
      <div class="Label">
        <h1>Choose Today's Task:</h1>
      </div>

      <div className="task-list">
        <div className="task">
          <button title="task1" onClick={() => taskPressed(task1)}>{taskArray[task1]}</button>
        </div>

        <div className="task">
          <button title="task1" onClick={() => taskPressed(task2)}>{taskArray[task2]}</button>
        </div>

        <div className="task">
          <button title="task1" onClick={() => taskPressed(task3)}>{taskArray[task3]}</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks
