import React, {createContext, useReducer} from 'react';
import transactionsReducer from './transactions-reducer';
import {initialState} from './initial-state';

export const TransactionsContext = createContext();

export const TransactionsContextProvider = (props) => {
    const [state, dispatch] = useReducer(transactionsReducer, initialState);
    return (
        <TransactionsContext.Provider value={[state, dispatch]}>
            { props.children }
        </TransactionsContext.Provider>
    )
}