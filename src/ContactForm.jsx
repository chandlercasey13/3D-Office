import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, MessageSquare, Send } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full h-full   p-1 flex flex-col ">
      <div className="relative w-full h-4 flex justify-center items-end pb-0.25">
      <h2 className="text-[10px] font-bold text-center absolute">Contact Me</h2>
      </div>
      <form className="space-y-0.5 w-full">
        <div className="relative">
          <User className="absolute left-1 top-1/2 transform -translate-y-1/2 text-muted-foreground h-2 w-2" />
          <Input 
            placeholder="Name" 
            required 
            className="h-3 text-[7px] pl-4 pr-1 py-0 rounded   focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary/20  placeholder:text-muted-foreground/50 " 
            aria-label="Name"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-1 top-1/2 transform -translate-y-1/2 text-muted-foreground h-2 w-2" />
          <Input 
            type="email" 
            placeholder="Email" 
            required 
            className="h-3 text-[7px] pl-4 pr-1 py-0 rounded  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary/20 placeholder:text-muted-foreground/50 " 
            aria-label="Email"
          />
        </div>
        <div className="relative flex justify-center items-center h4">
          <MessageSquare className="absolute left-1 top-1 text-muted-foreground h-2 w-2" />
          <textarea 
            placeholder="Message" 
            required 
            className=" w-full h-full   text-[7px] pl-4 pr-1 py-0.5 text-black  resize-none border rounded  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary/20" 
           
          />
        </div>
       
        
      </form>
      <div className="h-4 relative">
      <Button type="submit" size="sm" className=" absolute top-1 w-full h-full text-[7px] p-0 mt-0">
          <Send className="h-full w-2 mr-0.5" />
          Send
        </Button>
        </div>
    </div>
  )
}