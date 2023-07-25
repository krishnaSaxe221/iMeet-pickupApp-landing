import './App.css';
import Landing from './components/Landing';
import Accordin from './components/Accordin';
import Whitepage from './components/Whitepage';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="landingpage">
      <NavBar/>
      <Landing/>
      <Whitepage/>
      <Accordin/>
      <Footer/>
    </div>
    
  );
}

export default App;
