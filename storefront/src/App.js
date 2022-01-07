import logo from './logo.svg';
import './App.css';

import {ExchangeRates} from './index'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
      <Navbar />
    </>
  );
}

export default App;
