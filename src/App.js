import './App.css';
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContractsInfo from './components/ContractsInfo';
import Trades from './components/Trades';
import About from './components/About';
import DetailsPage from './components/details/DetailsPage';

function App() {
  return (
    <>
      <NavMenu />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contracts' element={<ContractsInfo />} />
          <Route path='trades' element={<Trades />} />
          <Route path='about' element={<About />} />
          <Route path='/details/:lot_id' element={<DetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
