const transactionsReducer = (state, {payload, type}) => {
    switch (type) {
        case "GET_TRANSACTIONS":
            return {
                transactionsSchema: {
                    ...state.transactionsSchema,
                    isLoading: true
                }
            };
        case "GET_TRANSACTIONS_SUCCESS":
            return {
                transactionsSchema: {
                    ...state.transactionsSchema,
                    transactions: payload,
                    isLoading: false,
                }
            };
        case "GET_TRANSACTIONS_ERROR":
            return {
                transactionsSchema: {
                    ...state.transactionsSchema,
                    isLoading: false,
                    isError: true
                }
            }
        case "ADD_TRANSACTIONS":
            return {
                transactionsSchema: {
                    ...state.transactionsSchema,
                    isLoading: true
                }
            }
        case "ADD_TRANSACTIONS_SUCCESS":
            return {
                transactionsSchema: {
                    ...state.transactionsSchema,
                    transactions: [...state.transactionsSchema.transactions, payload],
                    isLoading: false,
                }
            }
        case "ADD_TRANSACTIONS_ERROR":
            return {
                ...state.transactionsSchema,
                isLoading: false,
                isError: true
            }
        default: 
            return {
                ...state.transactionsSchema
            }
    }
}

export default transactionsReducer;