import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/molecules/Navbar';
import Home from './pages/HomePage';
import ProfessionalDirectory from './pages/ProfessionalDirectory';
import AboutUs from './pages/AboutUs';
import Quizzes from './pages/Quizzes';
import ResourceLibrary from './pages/ResourceLibrary';
import OnlineCommunity from './pages/OnlineCommunity';
import Footer from './Components/molecules/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivancyPolicy';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
            <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<LoginPage/>}/>
        <Route path="ProfessionalDirectory" element={<ProfessionalDirectory />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="ResourceLibrary" element={< ResourceLibrary/>} />
        <Route path="OnlineCommunity" element={<OnlineCommunity />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} /> {/* Route for the TermsAndConditions component */}
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
