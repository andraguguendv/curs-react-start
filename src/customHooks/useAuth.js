import React, {useContext} from "react";
import {AuthContext} from "../context/authContext";

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthContext provider');
    }

    return context;
}

export {useAuth};
