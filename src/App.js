import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Journey from './components/Journey';
import Navbar from './components/Navbar';
import Founders from './components/Founders';
import Team from './components/Team';
import Aboutus from './components/Aboutus';
import Mission from './components/Mission';
import Core from './components/Core';
import Footer from './components/Footer';
function App() {
  return (
    <>
         <Header/>
         <Navbar/>
         <Aboutus/>
         <Journey/>
         <Mission/>
         <Core/>
         <Founders/>
         <Team/>
         <Footer/>
    </>
  );
}

export default App;
