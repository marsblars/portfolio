import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { About, Contact, Home, Projects, Test } from './pages';
import  Game  from './components/Game';
import Navbar  from './components/Navbar';
import { Path } from 'three';



const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } /> 
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/test" element={ <Test /> } />
          <Route path="/map" element={ <Game /> } />
        </Routes>
      </Router>
    </main>


/* <BrowserRouter>
<div className='relative z-0 bg-primary'>
  <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Navbar/>
    <Hero />
  </div>
  <About />
  <Experience />
  <Tech />
  <Works />
  <Feedbacks />
  <div className="relative z-0">
    <Contact />
    <StarsCanvas />
  </div>
</div>
</BrowserRouter> */
  )
}

export default App
