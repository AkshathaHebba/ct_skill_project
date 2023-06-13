import './App.css';
import Home from "./screens/Home";
import About from "./screens/About";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

const baseURL = process.env.PUBLIC_URL || '';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={`${baseURL}/about`} element={<About />} />
                <Route path={`${baseURL}/`} element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
