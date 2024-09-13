import { FeedbackListProps } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type ContainerProps = FeedbackListProps & {
  handleAddToList: (text: string) => void;
};

const Container = ({
  feedbackItems,
  errorMessage,
  isLoading,
  handleAddToList,
}: ContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Container;
