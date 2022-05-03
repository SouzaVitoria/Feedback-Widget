import Header from "../Header";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import FeedbackContentForm from "./FeedbackContentForm/FeedbackContentForm";

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export default function FeedbackContent({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <Header
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image}
        onFeedbackRestartRequested={onFeedbackRestartRequested}
      />
      <FeedbackContentForm />
    </>
  );
}
