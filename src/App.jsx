import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from './pages/Dashboard';
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import Header from "./components/Header/Header.jsx";
import Notes from "./pages/Notes.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Codeforces from "./pages/Codeforces.jsx";
import PrivateRoute from './components/Header/PrivateRoute.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="notes" element={<Notes />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="codeforces-stats" element={<Codeforces />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
