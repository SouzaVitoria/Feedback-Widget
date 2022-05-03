import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export default function Header() {
  return (
    <header>
      <span className="text-xl leading-6">Deixe o seu feedback</span>
      <Popover.Button
        className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
        title="Fechar formulário de Feedback"
      >
        <X weight="bold" className="w-4 h-4" />
      </Popover.Button>
    </header>
  );
}
