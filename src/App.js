import './App.css';
import HomePage from './components/HomePage';
import ProjectInformation from './components/ProjectInformation';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectInformation />} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
