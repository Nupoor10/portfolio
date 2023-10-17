import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from './components/Projects/Projects';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
