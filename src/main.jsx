// import React from "react";
// import ReactDOM from "react-dom/client";
// import Notes from "./Notes.jsx";

// import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Layout from "../Layout.jsx";
// import Home from "./components/Home/Home.jsx";
// import About from "./components/About/About.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import User from "./components/User/User.jsx";
// import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
// import Projects from "./components/Projects/Projects.jsx";
// import QuizPage from "./pages/QuizPage.jsx";
// import WelcomePage from './pages/Welcome.jsx';
// import ChallengesPage from './pages/Challenges.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,

//     children: [
//       {
//         path: "",
//         element: <Home />
//       },

//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

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

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


 import React from 'react'
 import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
 import './index.css'

 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <App />
  </React.StrictMode>,
)