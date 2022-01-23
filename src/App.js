import "./App.css";
import Home from "./component/Home";
import Navbar2 from "./component/Navbar/Navbar2";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products/Products";
import Product from "./component/Product/Product";
import Cart from "./component/Cart";
import Footer from "./component/Footer/Footer";
import Modal2 from "./component/Modal2/Modal2";

function App() {
  return (
    <>
      <Modal2 />
      <Navbar2 />
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
      
    </>
  );
}

export default App;
