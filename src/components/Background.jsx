import { useEffect, useMemo, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const PARTICLE_COUNT = 50;
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'.split('');
const FONT_SIZE = 10;
const FRAME_MS = 35;

/* Canvas rain, drawn at a low opacity behind the glass so it reads as texture
   rather than decoration competing with the content. */
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    let drops = [];

    /* Rebuild the column set on resize, so a widened window fills with rain
       instead of leaving a bare strip on the right. */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = new Array(Math.ceil(canvas.width / FONT_SIZE)).fill(1);
    };

    const draw = () => {
      // Cream trail fade + teal glyphs: the rain recedes into the light
      // background instead of smearing navy over it.
      context.fillStyle = 'rgba(247, 240, 227, 0.04)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = 'rgba(11, 114, 133, 0.85)';
      context.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        context.fillText(glyph, i * FONT_SIZE, drops[i] * FONT_SIZE);

        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    resize();
    const timer = setInterval(draw, FRAME_MS);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas className="matrix-rain" ref={canvasRef} aria-hidden="true" />;
}

/* Fixed layer behind everything: the aurora gradient (pure CSS), drifting
   particles, and the matrix canvas. Frosted panes need something with real
   hue to blur — this is it. */
export default function Background() {
  const reduced = useReducedMotion();

  const particles = useMemo(() => {
    if (reduced) return [];

    return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
      const size = `${Math.random() * 4 + 2}px`;
      return {
        id: index,
        left: `${Math.random() * 100}vw`,
        width: size,
        height: size,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 10 + 10}s`,
      };
    });
  }, [reduced]);

  return (
    <div className="bg-animation" aria-hidden="true">
      {/* Drifting colour for the frosted panes to blur. Inside .bg-animation
          so the reduced-motion and print rules that hide it cover these too. */}
      {!reduced && (
        <div className="glass-blobs">
          <div className="glass-blob glass-blob-1" />
          <div className="glass-blob glass-blob-2" />
          <div className="glass-blob glass-blob-3" />
        </div>
      )}

      <div className="floating-particles">
        {particles.map(({ id, ...style }) => (
          <div key={id} className="particle" style={style} />
        ))}
      </div>
      {!reduced && <MatrixRain />}
    </div>
  );
}
