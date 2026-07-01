import React, { useEffect, useState } from 'react';

export const GlowBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.4s ease',
      }}
    >
      {/* Dynamic Dotted Grid Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(var(--grid-dot-color) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Dynamic Radial Gradient following mouse */}
      {isHovering && (
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--glow-color-1) 0%, var(--glow-color-2) 45%, rgba(0, 0, 0, 0) 70%)',
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
            transition: 'transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1)',
            filter: 'blur(30px)',
            opacity: 1,
          }}
        />
      )}

      {/* Static corner glows using variables */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow-color-2) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow-color-1) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
};
export default GlowBackground;
