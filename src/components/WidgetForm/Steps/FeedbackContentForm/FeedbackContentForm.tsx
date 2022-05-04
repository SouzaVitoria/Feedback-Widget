import { FormEvent } from "react";
import { useState } from "react";
import ScreenshotButton from "./ScreenshotButton";

export default function FeedbackContentForm() {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const handleSubmitFeedback = (e: FormEvent) => {
    e.preventDefault();
    console.log(screenshot, comment);
  };

  return (
    <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
      <textarea
        placeholder="Conte com detalhes o que está acontecendo..."
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <footer className="flex gap-2 mt-2">
        <ScreenshotButton
          screenshot={screenshot}
          onScreenshotTook={setScreenshot}
        />
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          disabled={comment.length === 0}
        >
          Enviar Feedback
        </button>
      </footer>
    </form>
  );
}
