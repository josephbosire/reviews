import HashtagItem from "./HashtagItem";

type HashtagListProp = {
  companyList: string[];
  handleSelectedCompany: (selectedCompany: string) => void;
};

const HashtagList = ({
  companyList,
  handleSelectedCompany,
}: HashtagListProp) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            company={company}
            onSelectCompany={handleSelectedCompany}
          />
        );
      })}
    </ul>
  );
};

export default HashtagList;
