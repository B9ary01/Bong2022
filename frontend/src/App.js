import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { BrowserRouter,Routes ,Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/signinScreen";
import { signout } from "./actions/userActions";


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

          <div>
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
