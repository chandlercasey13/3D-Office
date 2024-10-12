import React, { useEffect, useRef, useState } from 'react';

const CanvasWrapper = ({ children, heightElement }) => {
  const [height, setHeight] = useState('100lvh');
  const [width, setWidth] = useState('100%');
  const canvasRef = useRef(null);
  const resizeTimeout = useRef(null);
  


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
    
    const handleResize = () => {
      // Clear the previous timeout if resize happens again before 200ms
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }

      // Set a new timeout to run after 200ms
      resizeTimeout.current = setTimeout(() => {
        measureCanvasSize();
      }, 100); // Adjust this value to control debounce delay
    };

    measureCanvasSize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);  // Clean up the timeout
      }
    };
  }, []);




  


  return (
    <div style={{ height: `${height}`,  width: `${width}`, position: 'fixed' } } ref={canvasRef}>
      {children}
    </div>
  );
};

export { CanvasWrapper };