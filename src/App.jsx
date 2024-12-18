import {Outlet} from 'react-router-dom';
import './App.css'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';


function App() {


  return (
    < >
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
