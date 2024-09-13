type HashtagItemProp = {
  company: string;
  onSelectCompany: (selectedCompany: string) => void;
};

const HashtagItem = ({ company, onSelectCompany }: HashtagItemProp) => {
  return (
    <li key={company}>
      <button
        onClick={() => {
          onSelectCompany(company);
        }}
      >
        #{company}
      </button>
    </li>
  );
};

export default HashtagItem;
