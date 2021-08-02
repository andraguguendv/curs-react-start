const departmentReducer = (state, action) => {
    switch (action.type) {
        case 'pending' : {
            return {status: 'pending', department: null, error: null}
        }
        case 'resolved' : {
            return {status: 'resolved', department: action.data, error: null}
        }

        case 'rejected': {
            return {status: 'rejected', department: null, error: action.error}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }

}

export default departmentReducer;
