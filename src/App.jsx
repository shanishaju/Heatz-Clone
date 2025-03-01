import "./App.css";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import MainSectionD from "./components/MainSectionD";
import Nav from "./components/Nav";
import VideoCard from "./components/VideoCard";
import ViewAll from "./components/ViewAll";
import ViewAllD from "./components/ViewAllD";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Banner />
      <MainSection />
      <ViewAll />
      <MainSectionD/>
      <ViewAllD/>
      <VideoCard/>
    </div>
  );
}

export default App;
