import { FacebookIcon, Github, InstagramIcon, Linkedin, Plus} from "lucide-react"
import Button from "../ui/Button"

export default function UserCard() {

  const icons = [
    <Linkedin />,
    <Github />,
    <FacebookIcon />,
    <InstagramIcon />,
    <Plus />
  ]

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img 
        src="/me.png" 
        alt="Dev"
        className="rounded-full object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
          John Doe
          </h3>
        </div>
        <p className="opacity-70">Eu crio produtos para a internet 💻 🚀</p>
        <span className="pb-3 border-b border-white border-opacity-10 w-full"></span>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">
          Links
        </span>
        <div className="flex gap-3 justify-center">
          {icons.map((icon, index) => (
            <button key={index} className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] flex items-center justify-center transition-transform hover:scale-105 ease-in-out duration-300">
              {icon}
            </button>
          ))}
        </div>
      </div>
      <span className="border-b border-white border-opacity-10 w-full"></span>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full transition-transform hover:scale-105 ease-in-out duration-300">Confira meu template SaaS</Button>
            <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] flex items-center justify-center transition-transform hover:scale-105 ease-in-out duration-300">
              <Plus />
            </button>
          </div>
        </div>
    </div>
  )
}