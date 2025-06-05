import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LatestPage from "./pages/LatestPage";
import BuyPage from "./pages/BuyPage";
import GetStartedPage from "./pages/GetStartedPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Routes>
    </div>
  );
}

export default App;
