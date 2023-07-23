import logo from './logo.svg';
import './App.css';
import Navbar from './Component/NavbarComponenet/Navbar.js';
import Login from './Component/LoginRegistration/Login';
import Home from './Component/DashBoard/Home'

function App() {
  return (
    <><div>
    <Navbar/>
    </div>
    <div>
    {/* <Login/> */}
    <Home/>
    </div>
    </>
  );
}

export default App;
