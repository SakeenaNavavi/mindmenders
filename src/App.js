import './App.css';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/molecules/Navbar';
import Home from './pages/HomePage';
import ProfessionalDirectory from './pages/ProfessionalDirectory';
import AboutUs from './pages/AboutUs';
import Quizzes from './pages/Quizzes';
import ResourceLibrary from './pages/ResourceLibrary';
import OnlineCommunity from './pages/OnlineCommunity';
import Footer from './Components/molecules/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AddQuizzes from './pages/AddQuizzes';
import LoginRegister from './pages/LoginRegister';
import AppointmentBooking from './pages/AppointmentBooking';
import Doctorgui from './pages/Doctorgui';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Consultant-interface" element={<Doctorgui />} />
        <Route path="/ProfessionalDirectory" element={<ProfessionalDirectory />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Quizzes" element={<Quizzes />} />
        <Route path="/ResourceLibrary" element={< ResourceLibrary />} />
        <Route path="/OnlineCommunity" element={<OnlineCommunity />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/add-quizzes/:questionnaireId" Component={AddQuizzes} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/AppointmentBooking" element={<AppointmentBooking />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
