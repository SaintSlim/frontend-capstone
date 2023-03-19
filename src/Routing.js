import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import HomePage from "./pages/HomePage";
import Reservations from "./pages/Reservations";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    )
}