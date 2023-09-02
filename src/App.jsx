import Homepage from './parts/Homepage'
import About from './parts/About'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navigation/NavigationFix'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation/NavigationFix'
import './App.css'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about" element={<About/>}/>
    </>
  )
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={route}/>
  )
}

export default App
