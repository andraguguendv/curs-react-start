import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Departments from "./pages/Departments";
import UserInfo from "./pages/UserInfo";

const AuthenticatedApp = () => {
    return (
        <div>
            <Home/>
            <Transactions/>
            <Departments/>
            <UserInfo/>
        </div>
    )

}


export default AuthenticatedApp;
