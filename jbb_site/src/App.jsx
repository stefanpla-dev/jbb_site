import './App.css'
import HomepageImage from './sections/HomepageImage';
import About from './sections/About';
import Videos from './sections/Videos';
import Resumes from './sections/Resumes';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <HomepageImage />
      <About />
      <Videos />
      <Resumes />
      <Contact />
    </div>
  );
}

export default App
