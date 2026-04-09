import React, { useState, useEffect } from 'react';
import './MarvelIntro.css';

import img1 from '../previewintroimg/image.png';
import img2 from '../previewintroimg/image copy.png';
import img3 from '../previewintroimg/image copy 2.png';
import img4 from '../previewintroimg/image copy 3.png';
import img5 from '../previewintroimg/image copy 4.png';
import img6 from '../previewintroimg/image copy 5.png';
// import img7 from '../previewintroimg/winners.png'; // Uncomment when file is saved!

const flipImages = [img1, img2, img3, img4, img5, img6];

const MarvelIntro = ({ onComplete }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [phase, setPhase] = useState('flipping'); // 'flipping' | 'solid' | 'fadeout'

  useEffect(() => {
    // Timers for phase transitions - run ONLY ONCE on mount
    const solidTimer = setTimeout(() => {
      setPhase('solid');
    }, 2800); // 2.8s: Stop flipping, reveal solid gold logo

    const fadeTimer = setTimeout(() => {
      setPhase('fadeout');
    }, 3600); // 3.6s: Trigger massive cinematic zoom/fade

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500); // 4.5s: Unmount intro, reveal portfolio

    return () => {
      clearTimeout(solidTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Separate effect for the image flipping interval so it cleans up when phase changes,
  // without resetting the main sequence timers.
  useEffect(() => {
    let flipInterval;
    if (phase === 'flipping') {
      flipInterval = setInterval(() => {
        setCurrentImgIdx((prev) => (prev + 1) % flipImages.length);
      }, 100);
    }
    return () => {
      if (flipInterval) clearInterval(flipInterval);
    };
  }, [phase]);

  return (
    <div className={`marvel-intro-container phase-${phase}`}>
      {/* Hidden preloader so images don't flicker on first load */}
      <div style={{ display: 'none' }}>
        {flipImages.map((src, i) => (
          <img key={i} src={src} alt="preload" />
        ))}
      </div>

      <div className="marvel-logo-wrapper">
        <h1 
          className="marvel-text"
          style={{
            backgroundImage: phase === 'flipping' ? `url(${flipImages[currentImgIdx]})` : 'none'
          }}
        >
          S.K.
        </h1>
      </div>
    </div>
  );
};

export default MarvelIntro;
