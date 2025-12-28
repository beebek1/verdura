import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import SignupIn from './pages/SignupIndi';
import CreateCampaign from './pages/CreateCampaign';  


function AppWrapper() {
  const location = useLocation();

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupin" element={<SignupIn />} />
        <Route path="/create" element={<CreateCampaign />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <Router>
      <div>
        <AppWrapper />
      </div>
    </Router>
  );
}

export default App;
