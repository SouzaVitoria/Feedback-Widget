import ScreenshotButton from "./ScreenshotButton";

export default function FeedbackContentForm() {
  return (
    <form className="my-4 w-full">
      <textarea
        placeholder="Conte com detalhes o que está acontecendo..."
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
      />
      <footer className="flex gap-2 mt-2">
        <ScreenshotButton />
        <button
          type="submit"
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Enviar Feedback
        </button>
      </footer>
    </form>
  );
}
