import Header from "../Header";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

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
      <h1> Content </h1>
    </>
  );
}
