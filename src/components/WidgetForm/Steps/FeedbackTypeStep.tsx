import Header from "../Header";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackTypeProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeProps) {
  return (
    <>
      <Header title="Deixe o seu feedback" notBackIcon />
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 flex-1 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
