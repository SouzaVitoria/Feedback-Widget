import { Popover } from "@headlessui/react";
import { ArrowLeft, X } from "phosphor-react";

interface HeaderProps {
  initialStep?: boolean;
  title: string;
  image?: {
    source: string;
    alt: string;
  };
  onFeedbackRestartRequested?: () => void;
}

export default function Header({
  initialStep,
  title,
  image,
  onFeedbackRestartRequested,
}: HeaderProps) {
  return (
    <header>
      {!initialStep && (
        <button
          onClick={onFeedbackRestartRequested}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
      )}
      <span className="text-xl leading-6 flex items-center gap-2">
        {image && (
          <img src={image?.source} alt={image?.alt} className="w-6 h-6" />
        )}
        {title}
      </span>
      <Popover.Button
        className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
        title="Fechar formulário de Feedback"
      >
        <X weight="bold" className="w-4 h-4" />
      </Popover.Button>
    </header>
  );
}
