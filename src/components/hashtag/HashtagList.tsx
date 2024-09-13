import { useFeedbackItemsContext } from "../../lib/hooks";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const { companyList, handleSelectedCompany } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            key={company}
            company={company}
            onSelectCompany={handleSelectedCompany}
          />
        );
      })}
    </ul>
  );
};

export default HashtagList;
