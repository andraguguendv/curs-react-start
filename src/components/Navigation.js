import { Switch, Route } from "react-router-dom";
import Transactions from './transactions/Transactions';
import Home from '../pages/Home';

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
            </Switch>
        </>
    )
}

export default Navigation;