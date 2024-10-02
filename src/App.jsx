import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useContext } from 'react';
import NavBar from './components/navbar/navBar';
import Register from './components/register/register';
import Login from './components/login/login';
import Contact from './components/contact/contact';
import Proyects from './components/proyects/proyects';
import SobreMi from './components/sobreMi/sobreMi';
import NotFound from './components/notFound/notFound';
import Recover_password from './components/recover_password/recover_password';
import Reset_password from './components/reset_password/reset_password';
import Cv from './components/cv/cv';
import ComponentThemeProvider from './context/ThemeContext';

function App() {
  
  return (
    <>
      <ComponentThemeProvider>
      <div className="app-layout">
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route exact path="/" element={<SobreMi />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/sobreMi" element={<SobreMi />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/recover-password" element={<Recover_password />} />
                <Route path="/reset-password" element={<Reset_password />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
       
          </BrowserRouter>
        </div>
      </ComponentThemeProvider>
    </>
  );
}

export default App;
