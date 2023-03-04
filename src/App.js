import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Result from "./components/ResultPage/Result";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/weather/:weathercity" element={<Result />} />
    </Routes>
  );
}

export default App;
