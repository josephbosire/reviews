import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemType } from "../../lib/types";
import { useState } from "react";

type FeedbackItemProps = {
  feedbackItem: FeedbackItemType;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);
  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUpvoteCount((prev) => prev + 1);
    e.currentTarget.disabled = true; // Disable upvote after submission
    e.stopPropagation();
  };
  return (
    <li
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
