import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/register";
import { Toaster } from "react-hot-toast";
//import Footers from './components/Footers';
import VerduraCampaign from "./pages/campaign";
import Footer from "./components/Footers";
function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<VerduraCampaign />} />
        <Route path="/login" element={<div>login</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<div>contact</div>} />
      </Routes>
    </Router>
  );
}

export default App;