import './App.css';
import Navbar from './Components/navbar/navbar';
import Hero from './Components/Hero/Hero';
import Skills from'./Components/Skills/Skills';
import Footer from './Components/Footer';

import WorkExperience from './Components/Work Experience/Work Experience';
import Contact from "./Components/Contact/Contact";
import Projects from './Components/Projects/Projects';




const App =() => {
 
  return (
    <>
      <Navbar/>
      <div className='container'>
       
        <Hero/>
        <Skills/>
       
       <Projects/>
        <WorkExperience/>
        <Contact/>
        <Footer />
       
       

      </div>
    </>
  );
}

export default App;
