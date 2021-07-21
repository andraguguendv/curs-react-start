import React from "react";
import {useAuth} from "../customHooks/useAuth";

const Home = () => {
    const {name, email, role} = useAuth();


    return (<div>home works
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
    </div>);
}
export default Home;

