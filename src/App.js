import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Testimonial from './Components/Testimonials/Testimonial';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
