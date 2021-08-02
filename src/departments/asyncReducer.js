const asyncReducer = (state, action) => {
    switch (action.type) {
        case 'pending' : {
            return {status: 'pending', data: null, error: null}
        }
        case 'resolved' : {
            console.log(action, action.data, 'data from reducerrrrr');
            return {status: 'resolved', data: {data: action.data}, error: null}
        }

        case 'rejected': {
            return {status: 'rejected', data: null, error: action.error}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}


export default asyncReducer;
