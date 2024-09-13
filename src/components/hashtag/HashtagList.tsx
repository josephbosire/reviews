import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            key={company}
            company={company}
            onSelectCompany={selectCompany}
          />
        );
      })}
    </ul>
  );
};

export default HashtagList;
