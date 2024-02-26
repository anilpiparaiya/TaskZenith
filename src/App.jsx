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
import PrivateRoute from './components/Header/PrivateRoute.jsx';
import BookNotes from "./components/BookNotes/BookNotes.jsx";
import BookHome from './pages/books/Home';
import CreateBook from './pages/books/CreateBooks';
import ShowBook from './pages/books/ShowBook';
import EditBook from './pages/books/EditBook';
import DeleteBook from './pages/books/DeleteBook';
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
        <Route path="booknotes" element={<BookNotes />} />

      <Route path='/books' element={<BookHome />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
