
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DefaultRedirect from "./helpers/defaultRedirect";
import SplitSystemApi from "./helpers/Api";
import Header from "./components/Header";
import Search from "./components/Search";

const Router = () => {
   

    return (
        <BrowserRouter>
            <Route exact path="/">
                <Header />
            </Route>
            <Route exact path="/home">
                <Header />
            </Route>
            <Route exact path="/search">
                <Search />
            </Route>
        </BrowserRouter>
    );
};


export default Router;
