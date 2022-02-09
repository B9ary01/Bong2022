import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="/">bongs</a>
          </div>

          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>

          </div>
      </header>

  
    <main>
      <Routes>
      <Route path="/product/:id" element={<ProductScreen />}/>
      <Route path="/contact" element={<ContactScreen />}/>

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
