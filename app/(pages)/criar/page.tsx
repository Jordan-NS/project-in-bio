import Header from "@/app/components/landing-page/Header";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/Text-Input";
import { Rocket } from "lucide-react";

export default function CriarPage() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha o seu link</h1>
          <Rocket className="size-10" />
        </div>
        <form action="" className="w-full flex items-center gap-2">
          <span className="text-white">projectinbio.com/</span>
          <TextInput />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro exemplo</span>
        </div>
      </div>
    </div>
  );
}