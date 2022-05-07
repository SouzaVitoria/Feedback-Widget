import Header from "../Header";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import FeedbackContentForm from "./FeedbackContentForm/FeedbackContentForm";

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export default function FeedbackContent({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <Header
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image}
        onFeedbackRestartRequested={onFeedbackRestartRequested}
      />
      <FeedbackContentForm onFeedbackSent={onFeedbackSent} />
    </>
  );
}
