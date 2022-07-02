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
        <Route path="/ep7-database/" element={<HomePage />} />
        <Route
          path="/ep7-database/HeroFilterPage"
          element={<HeroFilterPage />}
        />
        <Route
          path="/ep7-database/ArtifactsFilterPage"
          element={<ArtifactsFilterPage />}
        />
        <Route path="/ep7-database/HeroPage/:id" element={<HeroPage />} />
        <Route
          path="/ep7-database/ArtifactsPage/:id"
          element={<ArtifactsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
