import { useContext } from "react";
import { FeedbackItemContext } from "../contexts/FeedbackItemsContextProvider";

export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemContext);
  if (!context) {
    console.log("Error Feedback Item Context not loaded");
    throw new Error("Error feedback item context not loaded");
  }
  return context;
};
