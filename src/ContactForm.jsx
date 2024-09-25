import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, MessageSquare, Send } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full h-full   p-1 flex flex-col justify-between">
      <h2 className="text-[10px] font-bold text-center mb-0.5">Contact Me</h2>
      <form className="space-y-0.5 w-full">
        <div className="relative">
          <User className="absolute left-1 top-1/2 transform -translate-y-1/2 text-muted-foreground h-2 w-2" />
          <Input 
            placeholder="Name" 
            required 
            className="h-4 text-[7px] pl-4 pr-1 py-0  outline-transparent focus:ring-0 focus:ring-offset-0 focus:border-primary/20" 
            aria-label="Name"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-1 top-1/2 transform -translate-y-1/2 text-muted-foreground h-2 w-2" />
          <Input 
            type="email" 
            placeholder="Email" 
            required 
            className="h-4 text-[7px] pl-4 pr-1 py-0  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary/20" 
            aria-label="Email"
          />
        </div>
       
        <Button type="submit" size="sm" className="w-full h-3.5 text-[7px] p-0">
          <Send className="h-2 w-2 mr-0.5" />
          Send
        </Button>
      </form>
    </div>
  )
}