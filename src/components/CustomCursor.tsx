import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the device is a touch screen
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      
      // Determine if hovering over clickable items
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.btn') !== null ||
        target.closest('.tech-tag') !== null;
        
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  // Animate the outer ring with a slight transition lag for organic follow effect
  useEffect(() => {
    if (!isVisible) return;
    
    let frameId: number;
    
    const updateRing = () => {
      setRingPosition((prev) => {
        // Linear interpolation for smooth lag lag
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frameId = requestAnimationFrame(updateRing);
    };
    
    frameId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(frameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer follow ring */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
      />
      {/* Inner precise dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
export default CustomCursor;
