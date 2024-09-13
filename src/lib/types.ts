export type FeedbackItemType = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  text: string;
  daysAgo: number;
  company: string;
};

export type FeedbackListProps = {
  feedbackItems: FeedbackItemType[];
  errorMessage: string;
  isLoading: boolean;
};
