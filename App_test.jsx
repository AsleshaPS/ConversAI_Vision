//  use single quotes.capital letter small letter. 
import "./App.css"                  
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from'./components/Card'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
  // Outlet
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Contact />,
      }
    ],
  },
]);

function App() {
  return (
    <>    
    <div className='App'>
      <RouterProvider router={router} />
    </div>
      <div>
          <main>
            This is your content.
          </main>
          <Footer/>

          <div className='cards'>
            <Card title="card-1" descryption="bye"/>
            <Card title="card-2" descryption=" hi"/>
            <Card title="card-3" descryption="oh"/>
          </div>          
      </div>
    </>
  )
}

export default App
