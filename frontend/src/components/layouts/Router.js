import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import Header from "./Header";
import Home from "../views/Home";
import Join from "../views/Join";
import Login from "../views/Login";
import Categories from "../views/Categories";
import ItemDetail from "../views/ItemDetail";
import Purchase from "../views/Purchase";
import ShopBascket from "../views/ShopBascket";
import User from "../User";
import Customer from "../Customer";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/join" component={Join}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/categories/:id" component={Categories} />
                    <Route path="/item-detail/:id" component={ItemDetail}/>
                    <Route path="/purchase" component={Purchase}/>
                    <Route path="/shopping-basket" component={ShopBascket}/>
                    <Route path="/user" component={User}/>
                    <Route path="/customer" component={Customer} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router
