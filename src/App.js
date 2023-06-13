import './App.css';
import Home from "./screens/Home";
import About from "./screens/About";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path='/about' element={<About />} />
                <Route exact index path='/' element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
