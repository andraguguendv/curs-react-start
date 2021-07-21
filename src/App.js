import './App.css';
import React, {useEffect, useState} from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import {publicFetch} from "./utils/publicFetch";

function App() {

    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');

    const [loginState, setLoginState] = useState({
        isLoading: false,
        isError: false,
        isSuccess: false,
        userInfo: userInfo ? JSON.parse(userInfo) : {},
        token: token ? token : null,
        expiresAt
    });


    const submitCredentials = async credentials => {

        const {email, password} = credentials;
        setLoginState({
            isLoading: true,
            isError: false,
            isSuccess: false,
            userInfo: null
        })


        try {
            const {data: {token, user, expirationDate}} = await publicFetch.post('v1/auth/login', {email, password});

            setLoginState({
                isLoading: false,
                isError: false,
                isSuccess: true,
                userInfo: user,
                token,
                expiresAt: expirationDate
            });

            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', JSON.stringify(user));
            localStorage.setItem('expiresAt', expirationDate);

        } catch (err) {
            setLoginState({
                isLoading: false,
                isError: true,
                isSuccess: false,
                userInfo: null,
                token: null,
                expiresAt: null
            })

        }
    }

    const {userInfo: info} = loginState;


    return (
        <div className="App">

            {loginState.token ? (<AuthenticatedApp userInfo={info}/>) : (
                <UnauthenticatedApp submitCredentials={submitCredentials}/>)}
        </div>
    );
}

export default App;
