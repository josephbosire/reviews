import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

const FeedbackList = () => {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems(),
  );
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
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
