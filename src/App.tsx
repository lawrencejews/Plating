import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles.css';
import { SearchParams } from './components/SearchParams';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home  from './components/Home';
import  Login  from './components/Login';


const App = () => {

  return (
    <StrictMode>
      <BrowserRouter>
        <header className='navbar-container'>
          <Link to="/">Home</Link>
          <Link to="/SearchParams">Search Restuarants</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Logout">Logout</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SearchParams" element={<SearchParams />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));