
import React, { useRef, useEffect, useState } from 'react';


const HTMLOverlay = ({ htmlPresent, arrowText, arrowPresent,heightElement }) => {



  return (
    <div className="html-overlay">
      <div className="html-overlay-organization-container">
        {htmlPresent && (
          <div className="overlay-text-container">
            <>
              <h1 className={`subtitle-text text-white `}> </h1>

              <h1 className={`title-text text-white`}>Chandler's Portfolio</h1>
            </>
          </div>
        )}
        <div className="trigger-div-cam-perspective"></div>





        <div
          className={`arrow-div ${arrowPresent ? `opacity-1` : `opacity-0`}`}
        >
          <div className="arrow-down">
            <p className="arrow-text">{arrowText}</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMRJREFUSEvtkkEOgyAQRf/oio3GG9ib2KP0JO1N2p7Eq3AD48odNkxCYqk4qCHpApcI7/H/QEj8UWI+skBsOFf05xVN43iHMW/VNHrtqtMwtCjLTlXVKxQlOGSGAw8AGsZcfQnDiZ4g6kB0C0nCAgsoih5A60u+4IBWdX3ZncAeYJAnYZC7uQDnrdIz+JHMs+ZaIuBRgpUkdmmzluWlxQRu8yIJtjr3G4kWuCShJ3toyNJ8Yv7vShADPFVRFhxpQDyTfMgfWFFEGd8C++sAAAAASUVORK5CYII="/>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default HTMLOverlay;
