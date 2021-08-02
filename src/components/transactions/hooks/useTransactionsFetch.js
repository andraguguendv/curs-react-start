import React, {useContext, useEffect} from "react";
import {useAuthorizedFetch} from "../../../customHooks/useAuthorizedFetch";
import {TransactionsContext} from "../transactions-context";

const useTransactionsFetch = (endpoint) => {
    const [state, dispatch] = useContext(TransactionsContext);
    const client = useAuthorizedFetch();
    useEffect(() => {
        dispatch({type: 'GET_TRANSACTIONS'});
        client(endpoint).then((transactions) => {
            console.log('here transactions', transactions);
            dispatch({type: "GET_TRANSACTIONS_SUCCESS", payload: transactions.data})
        }).catch(() => {
            dispatch({type: "GET_TRANSACTIONS_ERROR"});
        })
    }, [client])

};

export {useTransactionsFetch};
