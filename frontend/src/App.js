import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/views/Home";
import Categories from "./components/views/Categories";
import ItemDetail from "./components/views/ItemDetail";
import Purchase from "./components/views/Purchase";
import ShopBascket from "./components/views/ShopBascket";
import User from "./components/User";
import Customer from "./components/Customer";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/categories/:id" component={Categories} />
        <Route path="/item-detail/:id" component={ItemDetail}/>
        <Route path="/purchase" component={Purchase}/>
        <Route path="/shopping-basket" component={ShopBascket}/>
        <Route path="/user" component={User}/>
        <Route path="/customer" component={Customer} />
      </Switch>
    </Router>
  )
}

export default App;
