// import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/products" element={<Products/>}/>
           <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;