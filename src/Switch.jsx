import * as Switch from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";

const DarkModeSwitch = ({ handleDayNightToggle, daynighttoggle }) => (
  <form>
    <div className="flex ">
      <Moon className=" h-[1.4rem] w-[2.2rem]  transition-all rotate-0 scale-75 pr-2 text-white" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch.Root
          className="SwitchRoot" 
          onCheckedChange={() => handleDayNightToggle()}
        ><Switch.Thumb className= "SwitchThumb bg-white" ></Switch.Thumb>
        </Switch.Root>
      </div>
      <Sun className="h-[1.4rem] w-[2.2rem] rotate-0 scale-75 transition-all pl-2 text-white  " />
    </div>
  </form>
);

export default DarkModeSwitch;
