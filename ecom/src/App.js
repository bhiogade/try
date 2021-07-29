//import logo from './logo.svg';
//import './App.css';
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/product-details/:id" component={ProductDetails} />
      <Redirect to="/home" />
    </Switch>
      ecomm
    </>
  );
}

export default App;
