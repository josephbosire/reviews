const FeedbackForm = () => {
  return (
    <form className="form">
      <textarea
        maxLength={150}
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
      />
      <label htmlFor="feedback=textarea">
        Enter your feedback here and remember to hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
