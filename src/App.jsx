// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";
import SelayangPandang from "./pages/SelayangPandang";
import Post from "./pages/Post";
import VisiMisi from "./pages/VisiMisi";
import Structural from "./pages/Structural";
import SipKerja from "./pages/SipKerja";
import Document from "./pages/document"; // ⬅️ tambahin import

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/selayang-pandang" element={<SelayangPandang />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/structural" element={<Structural />} />
        <Route path="/sipkerja" element={<SipKerja />} />
        <Route path="/document" element={<Document />} /> {/* ⬅️ route baru */}
        <Route path="/profile" element={<Navigate to="/visi-misi" replace />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
