import NewProject from './components/NewProject.jsx';
import ProjectsSidebar from "./components/Sidebar.jsx"
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleAddNewProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleAddNewProject}/>
  } else if(projectsState.selectedProjectId === null) {
    content = <NewProject />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleAddNewProject}/>
      {content}
    </main>
  );
}

export default App;