import React, { useState }  from "react";
import { useDispatch,useSelector } from "react-redux";
import { BrowserRouter,Routes ,Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/signinScreen";
import { signout } from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ShopScreen from "./ShopScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {

  const cart=useSelector(state => state.cart);
  const {cartItems} =cart;

  const userSignin = useSelector ((state)=>state.userSignin);
  const {userInfo}=userSignin;


  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };


  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
              <Link className="brand" to="/">bongs</Link>
          </div>

          <div className="myLinks">
          <Link to="/shop">Shop</Link>

          <Link to="/contact">Contact</Link>

              <Link to="/cart">Cart
              {cartItems.length > 0 && (<span className="badge">{
                cartItems.length
              }
              
              </span>)}
              
              </Link>

              {
                  userInfo ? (
                    <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>

              </div>

                  ):(
                    <Link to="/signin">Sign In</Link>
                  )
      
                }



          </div>
      </header>

    <main>
      <Routes>
      <Route path="/cart/:id" element={<CartScreen />}/>
      <Route path="/cart" element={<CartScreen />}/>

      <Route path="/product/:id" element={<ProductScreen />}/>
      <Route path="/shipping" element={<ShippingScreen />}/>
      <Route path="/shop" element={<ShopScreen />}/>

      <Route path="/contact" element={<ContactScreen />}/>
      <Route path="/payment" element={<PaymentScreen />}/>

      <Route path="/placeholder" element={<PlaceOrderScreen />}/>
      
      <Route path="/signin" element={<SigninScreen />}/>
      <Route path="/register" element={<RegisterScreen />}/>

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
