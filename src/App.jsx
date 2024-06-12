import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient'>
        <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
          </div>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
