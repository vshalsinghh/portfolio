import './App.scss';
import React, {useRef, useEffect} from 'react';
import Header from './components/header/header';
import HeroPage from './components/hero-page/hero-page';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

import {Reveal} from 'react-gsap';
import {TweenMax} from 'gsap';


function App() {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0 , {css: {visibility: 'visible'}})
  },[]);

  return (   
    <div 
    ref={el => app=el} className="App">
      <Header />
        <HeroPage />
        <Reveal repeat trigger={<div />}>
            <Projects />
        </Reveal>
        <Reveal repeat trigger={<div />}>
            <Skills />
        </Reveal>
      
      <Footer />
       
    </div>
  );
}

export default App;
