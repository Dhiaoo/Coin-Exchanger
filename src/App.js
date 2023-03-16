
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Header from '../src/pages/Header';
import Home from '../src/pages/HomePage/Home';
import Buy from './pages/BuyPage/Buy';
import Sell from './pages/SellPage/Sell';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Buy' element={<Buy />} />
        <Route exact path='/Sell' element={<Sell />} />
      </Routes>
      
    </>
  );
}

export default App;
