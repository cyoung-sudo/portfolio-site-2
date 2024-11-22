import './App.scss';
import { useState } from 'react';
// Pages
import ProjectsList from './pages/projects/ProjectsList';
import ProjectShow from './pages/projects/ProjectShow';
// Components
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/navigation/Footer';
// Types
import { IProject } from './types/index.ds';

function App() {
  // Page controls
  const [showProject, setShowProject] = useState<IProject | null>(null);

  return (
    <div id="app">
      <NavigationBar/>
      <div className="app-section-1">

      </div>

      <div className="app-section-2">
        {!showProject && <ProjectsList setShowProject={setShowProject}/>}
        {showProject && <ProjectShow project={showProject} setShowProject={setShowProject}/>}
      </div>

      <div className="app-section-3">

      </div>
      <Footer/>
    </div>
  )
}

export default App;
