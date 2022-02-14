import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Routes ,Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/signinScreen";

function App() {
  const cart=useSelector(state => state.cart);
  const {cartItems} =cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
              <Link className="brand" to="/">bongs</Link>
          </div>

          <div>
              <Link to="/cart">Cart
              {cartItems.length > 0 && (<span className="badge">{
                cartItems.length
              }
              
              </span>)}
              
              </Link>



              <Link to="/signin">Sign In</Link>


          </div>
      </header>

    <main>
      <Routes>
      <Route path="/cart/:id" element={<CartScreen />}/>
      <Route path="/product/:id" element={<ProductScreen />}/>
      <Route path="/contact" element={<ContactScreen />}/>
      <Route path="/signin" element={<SigninScreen />}/>

      <Route exact path="/" element={<HomeScreen />}>

      </Route>
      </Routes>
</main>
<footer className="row center">All right reserved</footer>
</div>
      </BrowserRouter>  
  );
}



export default App;
