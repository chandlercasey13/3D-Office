import * as Switch from '@radix-ui/react-switch';
import { Moon, Sun } from "lucide-react"

const DarkModeSwitch= ({handleDayNightToggle}) => (
  <form>
    <div className='flex '>
    <Moon className=" h-[1.4rem] w-[2.2rem]  transition-all rotate-0 scale-90 pr-2" />
     
     
    <div style={{ display: 'flex', alignItems: 'center', }}>
     
      <Switch.Root className="SwitchRoot" onCheckedChange={() => handleDayNightToggle()}>
        <Switch.Thumb className="SwitchThumb" ></Switch.Thumb> 
      </Switch.Root>
      
    </div>
    <Sun className="h-[1.4rem] w-[2.2rem] rotate-0 scale-90 transition-all pl-2  " />
    </div>
  </form>
);

export default DarkModeSwitch