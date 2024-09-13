import React, { useState } from "react";
import { MAX_CHAR_COUNT } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [showValidaIndicator, setShowValidaIndicator] = useState(false);
  const [showInValidaIndicator, setShowInValidaIndicator] = useState(false);

  const charCount = MAX_CHAR_COUNT - text.length;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHAR_COUNT) {
      return;
    }
    setText(event.target.value);
  };

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation to check if it includes hashtag
    if (text.includes("#") && text.length >= 5) {
      setShowValidaIndicator(true);
    } else {
      setShowInValidaIndicator(true);
      return;
    }
    onAddToList(text);
    setText("");
  };
  return (
    <form
      className={`form ${showValidaIndicator ? "form--valid" : ""} ${showInValidaIndicator ? "form--invalid" : ""} `}
      onSubmit={handleSumbit}
    >
      <textarea
        onChange={handleChange}
        value={text}
        maxLength={150}
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
      />
      <label htmlFor="feedback=textarea">
        Enter your feedback here and remember to hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
