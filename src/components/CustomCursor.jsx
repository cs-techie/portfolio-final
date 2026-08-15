import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile viewports
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, input, .scfo-btn, .clickable');
      const viewable = target.closest('.project-visual-container, [data-cursor="view"]');

      if (viewable) {
        setIsHovered(true);
        setHoverText('VIEW');
      } else if (clickable) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: hoverText ? '60px' : isHovered ? '44px' : '14px',
        height: hoverText ? '60px' : isHovered ? '44px' : '14px',
        backgroundColor: hoverText ? '#ffffff' : isHovered ? 'rgba(255, 255, 255, 0.15)' : '#ffffff',
        border: hoverText ? 'none' : isHovered ? '1px solid #ffffff' : 'none',
        color: '#000000',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        fontWeight: 800,
        letterSpacing: '0.1em',
        mixBlendMode: hoverText ? 'normal' : 'difference',
      }}
    >
      {hoverText}
    </div>
  );
};

export default CustomCursor;
