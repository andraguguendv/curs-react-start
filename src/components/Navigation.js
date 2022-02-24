  import React, {Suspense} from 'react';
import {Switch, Route} from "react-router-dom";
// import Wallet from '../pages/Wallet';
// import Transactions from './transactions/Transactions';
// import Home from '../pages/Home';
// import Departments from "../pages/Departments";

const Home = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Home" */"../pages/Home"));
const Transactions = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Transactions" */"./transactions/Transactions"));
const Departments = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Departments" */"../pages/Departments"));
const Wallet = React.lazy(() =>import(/* webpackPrefetch: true, webpackChunkName:"Departments" */"../pages/Wallet"));


const Navigation = () => {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/transactions">
                    <Transactions/>
                </Route>
                <Route exact path="/departments">
                    <Departments/>
                </Route>
                <Route exact path="/wallet">
                    <Wallet/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Navigation;
