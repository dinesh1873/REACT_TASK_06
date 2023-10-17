import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav} from './components/Nav';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import {Project} from './components/Project';
import {Home} from './components/Home';
import { HashRouter,Routes,Route } from 'react-router-dom';

function App() { 
  return (
    <div>
     <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
      <Contact />
     </HashRouter>
    </div>
  );
}
export default App;
