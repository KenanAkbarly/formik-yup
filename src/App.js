import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Formm from './Formm/Formm'
import Detail from './Details/Detail'
function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/form" element ={<Formm/>}/>
      <Route path="/products/:id" element ={<Detail/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
