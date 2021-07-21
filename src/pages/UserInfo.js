import React, {useState, useEffect} from 'react';
import {useAuthorizedFetch} from "../customHooks/useAuthorizedFetch";

const UserInfo = () => {
    const [info, setInfo] = useState('');
    const client = useAuthorizedFetch();


    useEffect(() => {
        client(`v1/auth/me`, {method: 'GET'}).then(data => {
            console.log(data, 'response data coming from custom fetch hook');
        });

        console.log('get more user info');
    }, [client]);

    return <div>
        More info about me
    </div>
}
export default UserInfo;
