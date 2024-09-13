import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";
import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="app">
      <FeedbackItemsContextProvider>
        <Footer />
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
