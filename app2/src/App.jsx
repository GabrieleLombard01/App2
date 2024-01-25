import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./components/AppProjectList";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
      </Routes>
    </Router>
  );
}

export default App;
