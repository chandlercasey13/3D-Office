import React, { useEffect, useRef, useState } from 'react';

const CanvasWrapper = ({ children, heightElement }) => {
  const [height, setHeight] = useState('100svh');
  const [width, setWidth] = useState('100%');
  const canvasRef = useRef(null);

  


  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current;
      if (canvasElement) {
        const canvasHeight =  window.innerHeight;
        const canvasWidth = window.innerWidth;
        
        
        setWidth(`${window.innerWidth % 2 !== 0 ? canvasWidth +1  : canvasWidth}px`);
        setHeight(`${ window.innerHeight % 2 !== 0 ? canvasHeight +1  : canvasHeight}px`);
      }
    };
    
    measureCanvasSize();
    window.addEventListener('resize', measureCanvasSize);
    
    return () => {
      window.removeEventListener('resize', measureCanvasSize);
    };
  }, []);
  




  


  return (
    <div style={{ height: `${height}`,  width: `${width}`, position: 'fixed' } } ref={canvasRef}>
      {children}
    </div>
  );
};

export { CanvasWrapper };