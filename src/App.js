

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Histories from './pages/Histories';

function App() {


  
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/watch-history' element={ <Histories></Histories>}></Route>
       
        
      

      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
