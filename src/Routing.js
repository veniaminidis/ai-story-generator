import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CombinedOptionsPage from "./pages/CombinedOptionsPage";
import Story from "./pages/Story";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/options" element={<CombinedOptionsPage />} />
                <Route path="/story/:state" element={<Story />} />
            </Routes>
        </Router>
    );
};