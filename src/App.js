
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Header from '../src/pages/Header';
import Home from '../src/pages/HomePage/Home';
import Reviews from './pages/ReviewsPage/Reviews';
import News from './pages/News/News';
import About from './pages/AboutPage/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Reviews' element={<Reviews />} />
        <Route exact path='/News' element={<News />} />
        <Route exact path='/About' element={<About />} /> 
        
      </Routes>
      
    </>
  );
}

export default App;
