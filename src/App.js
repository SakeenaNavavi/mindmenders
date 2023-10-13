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
function App() {
  return (
    <div className="App">
      <Navbar/>
            <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="ProfessionalDirectory" element={<ProfessionalDirectory />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Quizzes" element={<Quizzes />} />
        <Route path="ResourceLibrary" element={< ResourceLibrary/>} />
        <Route path="OnlineCommunity" element={<OnlineCommunity />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
