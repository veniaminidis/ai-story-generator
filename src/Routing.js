import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CombinedOptionsPage from "./pages/CombinedOptionsPage"
import Story from "./pages/Story"

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/home/options" element={<CombinedOptionsPage />} />
                <Route path="/home/story/:state" element={<Story />} />
            </Routes>
        </Router>
    )
}