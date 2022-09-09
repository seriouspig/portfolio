import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
