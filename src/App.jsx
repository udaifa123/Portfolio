import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [progress, setProgress] = useState(0);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    };

    const animateRing = () => {
      if (ring) {
        rx += (mx - rx - 18) * 0.14;
        ry += (my - ry - 18) * 0.14;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;