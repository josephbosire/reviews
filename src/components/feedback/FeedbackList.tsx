import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { FeedbackListProps } from "../../lib/types";

const FeedbackList = ({
  feedbackItems,
  errorMessage,
  isLoading,
}: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
