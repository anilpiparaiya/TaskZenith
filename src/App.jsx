import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import QuizPage from './pages/QuizPage.jsx';
import Header from './components/Header/Header.jsx'
import Notes from './pages/Notes.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="notes" element={<Notes />} />
        <Route path="quiz" element={<QuizPage />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  )
}