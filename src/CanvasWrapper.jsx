import React, { useEffect, useRef, useState } from 'react';

const CanvasWrapper = ({ children }) => {
  const [height, setHeight] = useState('100svh');
  const [width, setWidth] = useState('100svw');
  const canvasRef = useRef(null);

  useEffect(() => {
    const measureCanvasSize = () => {
      const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;

      // Apply calculations based on the canvas size and adjust for odd values
      setWidth(`${viewportWidth % 2 === 0 ? viewportWidth + 1 : viewportWidth}px`);
      setHeight(`${viewportHeight % 2 !== 0 ? viewportHeight : viewportHeight}px`);
    };

    // Initial size measurement
    measureCanvasSize();

    // Add event listeners for both standard resize and visualViewport resize
    window.addEventListener('resize', measureCanvasSize);
    window.visualViewport && window.visualViewport.addEventListener('resize', measureCanvasSize);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('resize', measureCanvasSize);
      window.visualViewport && window.visualViewport.removeEventListener('resize', measureCanvasSize);
    };
  }, []);

  return (
    <div style={{ height, width }} ref={canvasRef}>
      {children}
    </div>
  );
};

export { CanvasWrapper };
