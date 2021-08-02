import {useEffect, useReducer} from "react";
import asyncReducer from "./asyncReducer";

const useAsync = (initialState, asyncCallback, dependencies) => {

    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'idle',
        data: null,
        error: null,
        ...initialState
    })


    useEffect(() => {
        const promise = asyncCallback();
        if (!promise) {
            return;
        }

        dispatch({type: 'pending'})

        promise.then(data => {
                console.log(data, 'data coming from custom hook');
                dispatch({type: 'resolved', data});
            },
            error => {
                dispatch({type: 'rejected', error})
            }
        )
    }, dependencies)

    return state;


}

export default useAsync;


