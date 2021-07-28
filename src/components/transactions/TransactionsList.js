import {React, useContext, useEffect} from 'react';
import { useAuthorizedFetch } from '../../customHooks/useAuthorizedFetch';
import {useTransactionsFetch} from './hooks/useTransactionsFetch';
import {TransactionsContext} from './transactions-context';
// import axios from 'axios';
import { publicFetch } from '../../utils/publicFetch';

const TransactionsList = () => {
    useTransactionsFetch('v1/transactions');
    const [transactionsState, dispatch] = useContext(TransactionsContext);
    return (
        <ul>
            {
                transactionsState && transactionsState.transactionsSchema.transactions.map((item, i) => (
                    <li key={i}>
                        <span>{item.id}</span>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                        <span>{item.amount}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default TransactionsList;