import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from './pages/Dashboard';
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import Header from "./components/Header/Header.jsx";
import Notes from "./pages/Notes.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Codeforces from "./pages/Codeforces.jsx";
import PrivateRoute from './components/Header/PrivateRoute.jsx';
import BookNotes from "./components/BookNotes/BookNotes.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="notes" element={<Notes />} />
        <Route path="codeforces-stats" element={<Codeforces />} />
        <Route path="booknotes" element={<BookNotes />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
