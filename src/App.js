import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Pages/Home/Home';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
