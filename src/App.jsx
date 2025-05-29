
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import SavedDesign from "./pages/SavedDesigns"; // Only this import is needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/Landingpage" element={<LandingPage />} />
      <Route path="/gallery" element={<SavedDesign />} />
    </Routes>
  );
}
