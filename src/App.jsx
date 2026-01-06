import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginInd from './pages/auth/Login.jsx';
import {Toaster} from 'react-hot-toast';


import OrgDashboard from './pages/OrgDashboard.jsx';
import ProfileInd from './pages/ProfileInd.jsx';
import JoinCampaign from './pages/JoinCampaign.jsx';
import IndDashboard from './pages/IndDashboard.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import SignUpInd from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
// import Registration from './pages/profile.jsx'
function App() {

  return (
    <Router>
      <Toaster/>
      <Routes>
          <Route path='/' element={<LoginInd/>}/>
          <Route path='/orgdashboard' element={<OrgDashboard/>}/>
          <Route path='/profileind' element={<ProfileInd/>}/>
          <Route path='/joincampaign' element={<JoinCampaign/>}/>
          <Route path='/inddashboard' element={<IndDashboard/>}/>


          <Route path='/reset-password' element={<ForgetPassword/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<SignUpInd/>}/>


          {/* <Route path='/temp' element={<Registration/>}/> */}
      </Routes>
    </Router>
  )
}

export default App;
