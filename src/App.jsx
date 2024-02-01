import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import QuizPage from './pages/QuizPage.jsx';
import Header from './components/Header/Header.jsx'
import Notes from './pages/Notes.jsx'
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import Contact from './components/Contact/Contact.jsx'


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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="notes" element={<Notes />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />

        
      </Routes>
        
    </BrowserRouter>
  )
}



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<WelcomePage />} />
//       <Route path="/challenges" element={<ChallengesPage />} />

//       <Route path="home" element={<Home />} /> 
//       <Route path="notes" element={<Notes />} />
//       <Route path="quiz" element={<QuizPage />} />
//       <Route path="task" element={<Task />} />
//       <Route path="investment" element={<Calculator />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />
//       <Route loader={githubInfoLoader} path="github" element={<Github />} />
//     </Route>
//   )
// );

// Legacy Code.......................

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// const router = createBrowserRouter([
//   // { path: '/', element: <WelcomePage /> },
//   // { path: '/challenges', element: <ChallengesPage /> },
//   { path: '/', element: <QuizPage /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

