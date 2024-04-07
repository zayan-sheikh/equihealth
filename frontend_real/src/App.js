import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Tasks from './pages/Tasks'

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/tasks' exact element={<Tasks />}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
