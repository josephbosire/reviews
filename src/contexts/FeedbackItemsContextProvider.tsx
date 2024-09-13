import { createContext, useEffect, useMemo, useState } from "react";
import { FeedbackItemType } from "../lib/types";

type TFeedbackItemContext = {
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  feedbackItems: FeedbackItemType[];
  filteredFeedbackItems: FeedbackItemType[];
  handleAddToList: (text: string) => void;
  handleSelectedCompany: (text: string) => void;
};
type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

export const FeedbackItemContext = createContext<TFeedbackItemContext | null>(
  null,
);

const FeedbackItemsContextProvider = ({
  children,
}: FeedbackItemsContextProviderProps) => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems],
  );
  const handleAddToList = async (text: string) => {
    const companyName =
      text
        .split(" ")
        .find((word) => word.startsWith("#"))
        ?.substring(1) || "Inka";
    const newItem: FeedbackItemType = {
      id: new Date().getTime(),
      upvoteCount: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      text: text,
      daysAgo: 0,
    };
    setFeedbackItems((prev) => [...prev, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );
  };
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        );
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong");
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany],
  );

  const handleSelectedCompany = (selectedCompany: string) => {
    setSelectedCompany(selectedCompany);
  };

  return (
    <FeedbackItemContext.Provider
      value={{
        feedbackItems,
        filteredFeedbackItems,
        companyList,
        isLoading,
        errorMessage,
        handleAddToList,
        handleSelectedCompany,
      }}
    >
      {children}
    </FeedbackItemContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
