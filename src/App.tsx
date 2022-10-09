import React from 'react';
import './App.scss';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Shop } from './Shop/Shop';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper-content">
        <Header />
        <Shop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
