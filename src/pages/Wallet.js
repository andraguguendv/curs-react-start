import React from 'react';
import { useArray } from '../customHooks/useArray';

const Wallet = props => {
    console.log('Wallet component render STARTED') // [Lifecycle]
    const wallets = useArray([{name: 'Wallet  no. 0'}]);

    const handleAddNewWallet = () => {
        wallets.add({name: `Wallet no. ${wallets.list.length + 1}`})
    }
    console.log('Wallet component render ENDED') // [Lifecycle]

    return (
        <div className="my-4 mx-4">
            <button 
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                onClick={handleAddNewWallet}
            >
                Add
            </button>
            <button 
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                onClick={() =>  wallets.clear()}
                disabled={wallets.isEmpty()}
            >
                Remove All
            </button>
            <div>
                <p>My wallets</p>
                {wallets.isEmpty()
                    ? 'You have no wallets'
                    : <ul className="list-disc list-inside dark:text-gray-400">
                        {wallets.list.map((wallet, i) => <div  key={i} className="flex flex-row">
                            <li>{wallet.name}</li>
                            <button 
                                onClick={() => wallets.remove(i)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </button>
                        </div>)}
                        
                    </ul>
                }
                
            </div>
        </div>
    );
};

export default Wallet;