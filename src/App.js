// import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
// import Footer from "./components/Footer";
import "./App.css";
import ProductDetails from './routes/ProductDetails';
import { SnackbarProvider } from 'notistack';
import Checkout from './routes/Checkout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/products" element={<Products/>}/>
           <Route path="/products/:id" element={<ProductDetails/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;