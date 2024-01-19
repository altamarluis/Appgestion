import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import Login from './login'
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
            <Login />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App
