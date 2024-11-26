import './App.scss';
import { useState, useRef } from 'react';
// Pages
import Profile from './pages/profile/Profile';
import ProjectsList from './pages/projects/ProjectsList';
import ProjectShow from './pages/projects/ProjectShow';
import Info from './pages/info/Info';
// Components
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/navigation/Footer';
// Types
import { IProject } from './types/index.ds';

function App() {
  // Page controls
  const [showProject, setShowProject] = useState<IProject | null>(null);
  // Hooks
  const section2Ref = useRef<HTMLDivElement | null>(null);

  return (
    <div id="app">
      <NavigationBar/>
      <div className="app-section-1">
        <Profile/>
      </div>

      <div className="app-section-2" ref={section2Ref}>
        {!showProject && 
          <ProjectsList 
            setShowProject={setShowProject}
            section2Ref={section2Ref}/>
        }
        {showProject && 
          <ProjectShow 
            project={showProject} 
            setShowProject={setShowProject}
            section2Ref={section2Ref}/>
        }
      </div>

      <div className="app-section-3">
        <Info/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
