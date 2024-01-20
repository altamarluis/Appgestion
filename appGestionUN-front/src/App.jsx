import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import Login from './login'
import MainMenu from './mainmenu';
import CreateUser from './createUser';
import ForgotPassword from './forgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Agrega estilos personalizados si es necesario

//import './Sidebar.css'; // Agrega estilos personalizados para el sidebar si es necesario


function App() {

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          {/* Contenido principal aquí */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<MainMenu />} />
                <Route path="/registro" element={<CreateUser />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
              </Routes>
            </Router>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App
