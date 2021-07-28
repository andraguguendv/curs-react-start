import {TransactionsContextProvider} from './transactions-context';
import TransactionsList from './TransactionsList';

const Transactions = () => {
    return (
        <TransactionsContextProvider>
            <TransactionsList/>
        </TransactionsContextProvider>
    )
}

export default Transactions;
