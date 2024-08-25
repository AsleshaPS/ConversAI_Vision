import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
// import Footer from './components/Footer';
// import Card from './components/Card';
import TeamSection from './components/TeamSection';
import './index.css';
import Login from './components/Login';
import { Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

// Layout component without Navbar
const Layout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet /> {/* This is where routed content will be displayed */}
    </main>
    {/* <Footer /> */}
  </div>
);

// Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />, // Use the Layout component for the routing structure
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/teamsection",
        element: <TeamSection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chatbot",  // New route for the Chatbot
        element: <Chatbot />,
      },
    ],
  },
]);

export function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
    
  );
}
