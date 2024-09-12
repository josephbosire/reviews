import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Bytegrad</p>
          <p>lorem ipsum asdcasdcasdcasdcasd</p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
