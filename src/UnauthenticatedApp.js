import Login from "./pages/Login";

const UnauthenticatedApp = ({submitCredentials}) => {
    return <div>
        <Login submitCredentials={submitCredentials}/>
    </div>
}

export default UnauthenticatedApp;
