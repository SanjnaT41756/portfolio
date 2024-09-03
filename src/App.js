import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ProjectInformation from './components/ProjectInformation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
