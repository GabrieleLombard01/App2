import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./components/AppProjectList";
import ProjectCreate from "./components/AppProjectCreate";
import ProjectEdit from "./components/AppProjectEdit";
import ProjectView from "./components/AppProjectView";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProjectList />} />
        <Route path="/create" element={<ProjectCreate />} />
        <Route path="/edit/:id" element={<ProjectEdit />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </Router>
  );
}

export default App;
