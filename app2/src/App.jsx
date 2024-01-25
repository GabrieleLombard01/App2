import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./components/AppProjectList";
import ProjectCreate from "./components/AppProjectCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
        <Route path="/create" element={<ProjectCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
