import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import SingleProduct from "./Components/single-product/SingleProduct";
import CartPage from "./Components/CartPage/CartPage";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/my-cart" component={CartPage} />
      <Route path="/product/:id" component={SingleProduct} />
    </>
  );
}

export default App;
