import React, { useState, useEffect } from 'react';

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    borderRadius: '50%',
    pointerEvents: 'none',
  };

  return <div style={style}></div>;
};

export default FollowMouse;
