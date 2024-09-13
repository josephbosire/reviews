import { create } from "zustand";
import { FeedbackItemType } from "../../lib/types";
type Store = {
  feedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => FeedbackItemType[];
  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
};

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (item) => item.company === state.selectedCompany,
        )
      : state.feedbackItems;
  },
  addItemToList: async (text: string) => {
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
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

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
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  fetchFeedbackItems: async () => {
    try {
      set(() => ({ isLoading: true }));
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      set(() => ({
        feedbackItems: data.feedbacks,
      }));
    } catch (error) {
      set(() => ({ errorMessage: "Something went wrong" }));
    }
    set(() => ({ isLoading: false }));
  },
}));
