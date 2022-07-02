import "./App.css";
import HomePage from "./views/HomePage";
import HeroFilterPage from "./views/HeroFilterPage";
import HeroPage from "./views/HeroPage";
import ArtifactsFilterPage from "./views/ArtifactsFilterPage";
import ArtifactsPage from "./views/ArtifactsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/epic7/HeroFilterPage" element={<HeroFilterPage />} />
        <Route
          path="/epic7/ArtifactsFilterPage"
          element={<ArtifactsFilterPage />}
        />
        <Route path="/epic7/HeroPage/:id" element={<HeroPage />} />
        <Route path="/epic7/ArtifactsPage/:id" element={<ArtifactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
