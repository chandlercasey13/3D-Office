import React, { useEffect, useRef, useState } from 'react';

const CanvasWrapper = ({ children, heightElement }) => {
  const [height, setHeight] = useState('100lvh');
  const [width, setWidth] = useState('100%');
  const canvasRef = useRef(null);

  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current;
      if (canvasElement) {
        const canvasHeight = canvasElement.clientHeight;
        const canvasWidth = canvasElement.clientWidth;

        setWidth(`${canvasWidth % 2 !== 0 ? canvasWidth +1  : canvasWidth}px`);
        setHeight(`${canvasHeight % 2 !== 0 ? canvasHeight +1  : canvasHeight}px`);
      }
    };
    
    measureCanvasSize();
    window.addEventListener('resize', measureCanvasSize);
    
    return () => {
      window.removeEventListener('resize', measureCanvasSize);
    };
  }, []);
  console.log(heightElement)
  console.log(height)
  return (
    <div style={{ height: `${height}`,  width: `${width}`, position: 'fixed' } } ref={canvasRef}>
      {children}
    </div>
  );
};

export { CanvasWrapper };