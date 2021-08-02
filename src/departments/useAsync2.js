import {useCallback, useEffect, useReducer} from "react";
import asyncReducer from "./asyncReducer";

const useAsync2 = (initialState) => {

    const [state, dispatch] = useReducer(asyncReducer, {
        status: 'idle',
        data: null,
        error: null,
        ...initialState
    })


    useEffect(() => {
        const run = useCallback(() => {

        })
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
    }, [asyncCallback])

    return {state, run};


}

export default useAsync2;


