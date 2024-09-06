


import DarkModeSwitch from "./Switch"


const HTMLOverlay = ({htmlPresent , handleDayNightToggle, daynighttoggle, arrowText, arrowPresent}) => {




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
          <div className="trigger-div-cam-perspective"></div>
          
          <div className={`arrow-div ${arrowPresent? `opacity-1`: `opacity-0`} `}>
          <div className="arrow-down">
            <p className="arrow-text">{arrowText}</p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAORJREFUWEftlMENgzAMRe1jtsgqHaWT0k1gC46pUhEKCOKf2JWoZK6Wrcfzd5hu9vHNeMiBpI24ITckGZDqniE3JBmQ6p4hM0NpniOlNBDzg0OYpMG53tMDrWwZPC4QEwLV05PntwANRBQRqANMbsk/8eQQXpJZCGinX4DSwMCGyl+tmbiA0sI0A9VMfaBTKjlrWtN2jfDKtk2npr7WumG6DFXWV0pwgM8C3mVIyBR0TVfXpgI6ZIrQ066dvhpohSKKyDtj9g5Jg6zqJoasYFRXZgmhfod+BeOGELMeasmSG/o7Q28kfn4l2htz1wAAAABJRU5ErkJggg=="/>
          </div>
          </div>
          
          <div className="dark-mode-switch">
          {htmlPresent && (
            <DarkModeSwitch handleDayNightToggle={handleDayNightToggle} daynighttoggle={daynighttoggle} />
          )}
            </div>
          </div>
          </div>   
    )}


    export default HTMLOverlay