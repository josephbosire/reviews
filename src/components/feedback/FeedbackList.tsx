import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../lib/hooks";

const FeedbackList = () => {
  const { filteredFeedbackItems, errorMessage, isLoading } =
    useFeedbackItemsContext();
  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
