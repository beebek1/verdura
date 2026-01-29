import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';


import Profile from './pages/organization/profile.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import SignUpInd from './pages/auth/Signup.jsx';
import Login from './pages/auth/Login.jsx';
import Dashboard from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Footer from './components/Footer.jsx';
import CreateBlog from './pages/organization/CreateBlog.jsx';
import CreateCampaign from './pages/organization/CreateCampaign.jsx';
import Climate from './pages/climate.jsx';
import Campaign from './pages/individual/JoinCampaign.jsx'
import ProtectedRoute from './pages/protect/protectedRoute.jsx'
import ResetPassword from './pages/auth/ResetPassword.jsx';
import Verifying from './pages/auth/Verifying.jsx'
import { NotFound } from './components/Loading.jsx';

import PrivacyPolicy from './pages/accessibilities/PrivacyPolicy.jsx';  
import TermsOfService from './pages/accessibilities/TermsOfService.jsx';
import CookiePolicy from './pages/accessibilities/CookiePolicy.jsx';
import AboutUs from './pages/accessibilities/AboutUs.jsx';
import Contact from './pages/accessibilities/Contact.jsx';
import FAQs from './pages/accessibilities/FAQs.jsx';



function AppWrapper(){

  const location = useLocation();
  const hideComponents = location.pathname === '/signup' || location.pathname.startsWith('/reset-password/') || location.pathname.startsWith('/verifying') || location.pathname === '/reset-password/:token' || location.pathname === '/forgot-password' || location.pathname === '/signin'

  return (
      <>
      {!hideComponents && <Navbar/>}
        <Routes>
          
            {/* <Route path='/profile' element={<Profile/>}/> */}
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/blogs/:blogId' element={<BlogDetails/>}/>
            <Route path='/create-blog/:blogId' element={<CreateBlog/>}/>
            <Route path='/forgot-password' element={<ForgetPassword/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<SignUpInd/>}/>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/campaigns' element={<Campaign/>}/>
            <Route path='/create-campaign/:CampaignId' element={<CreateCampaign/>}/>
            <Route path='/create-blog' element={<CreateBlog/>}/>
            <Route path='/reset-password/:token' element={<ResetPassword/>}/>
            <Route path="/verifying/:token" element={<Verifying/>} />
            <Route path='/create-campaign' element={<CreateCampaign/>}/>
            <Route path='/climate'  element={<Climate/>}/>
            <Route path='/profile' element= {<ProtectedRoute allowedRoles={["individual", "organization"]} element={<Profile/>}/>}/>

            <Route path="*" element={<NotFound />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/terms' element={<TermsOfService/>}/>
            <Route path='/cookies' element={<CookiePolicy/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/faq' element={<FAQs/>}/>

        </Routes>
      {!hideComponents && <Footer/>}
      </>
  );
}


//main function app
function App() {

  return (
    <Router>
      <Toaster/>
      <AppWrapper />
    </Router>
  )
}

export default App;
