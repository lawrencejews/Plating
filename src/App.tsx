import { StrictMode} from 'react';
import { render } from 'react-dom';
import './styles.css';
import { SearchParams } from './components/SearchParams';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './screens/SignupForm';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {

  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main>
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/SearchParams" element={<SearchParams />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));