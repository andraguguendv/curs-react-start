import {Switch, Route} from "react-router-dom";
import Transactions from './transactions/Transactions';
import Home from '../pages/Home';
import Departments from "../pages/Departments";

const Navigation = () => {
    return (
        <>
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
            </Switch>
        </>
    )
}

export default Navigation;
