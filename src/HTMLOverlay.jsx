


import DarkModeSwitch from "./Switch"


const HTMLOverlay = ({htmlPresent , handleDayNightToggle, daynighttoggle}) => {




return(

<div className="html-overlay"> 
<div className="html-overlay-organization-container">
          {htmlPresent && (
          <div  className="overlay-text-container">
            
              <>
            <h1
              className={`subtitle-text text-white `}
            >
              Welcome to
            </h1>

            <h1
              className={`title-text text-white`}
            >
              Chandler's Office
            </h1>
            </>
            
          </div>
          )}
          {htmlPresent && ( 
          <div className="arrow-down">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWZJREFUaEPtltFtwzAMRI+bJJs0mzSTNJ2k3aTtJt2EtYAYUA1Z4pkUggD0ryX63h0pS/Dkjzy5fiTAoxPMBDIBpwPZQk4D3dszAbeFzgKZwJ6Bqqr1OxGZYtaUokV4AhhnIxPIGTC2yt6ybKFsoWyhAw6o6ouIfPe2sj8yVT2JyC8rhx5iVf0A8ArgKiKfETNQDAHwtdS6LVeOdwaCAqjEr9/YhbAmUIlfa1IQZgBVLa6/AThtHGpCWAAa4tfSZ2s7mQHuF7QCUECGECOAjvjLaL7+3XKZfmMgegBR4oseKoEVdhE3TGIPIFL8YQBLEi2AaPEugBEEgHLc1s/lflRuu5bq+e3mQy1UF+m0k2W8XOLdCRhmogfhFh8GMGinFkSI+FAAAiJMfDiAASJU/BSADkS4+GkADYgp4qcCVBA/zN3GcvbWa9z/AfaD0esTINpRtl4mwDoWvT4TiHaUrZcJsI5Fr/8DSu3FMVjd7H8AAAAASUVORK5CYII=" />
          </div>
          )} 
          <div className="dark-mode-switch">
            <DarkModeSwitch handleDayNightToggle={handleDayNightToggle} daynighttoggle={daynighttoggle} />
          </div>
          </div>
          </div>   
    )}


    export default HTMLOverlay