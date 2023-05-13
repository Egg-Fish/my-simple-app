import ExplanationSection from "./ExplanationSection";
import Greetings from "./Greetings";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer"


function App() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <Greetings />

      <ExplanationSection />
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default App;
