import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Leaderboard from './pages/Leaderboard'
import AddFriends from './pages/AddFriends'
import Stats from './pages/Stats'

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/tasks' exact element={<Tasks />}></Route>
          <Route path='/leaderboard' exact element={<Leaderboard />}></Route>
          <Route path='/addfriends' exact element={<AddFriends />}></Route>
          <Route path='/stats' exact element={<Stats />}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
