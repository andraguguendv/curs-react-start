import {useEffect, useMemo, useReducer, useState} from "react";
import departmentReducer from "./departmentReducer";
import DepartmentInfoFallback from "./DepartmentInfoFallback";
import {publicFetch} from "../utils/publicFetch";
import DepartmentDataView from "./DepartmentDataview";

const DepartmentInfo = ({departmentName}) => {

    const departmentsMap = useMemo(() => {
        return {
            'Technology Systems department': '61026408fe992b73cca3c070',
            'Business department': '6102636efe992b73cca3c063',
            'HR department': '61026311fe992b73cca3c056',
            'IT department': '60f1314f8069e6d6724d08ca'
        }
    }, [])

    const [departmentState, dispatch] = useReducer(departmentReducer, {
        status: departmentName ? 'pending' : 'idle',
        department: null,
        error: null
    });

    useEffect(() => {
        if (!departmentName) {
            return;
        }

        dispatch({type: 'pending'})
        publicFetch(`v1/departments/${departmentsMap[departmentName]}`).then(
            ({data}) => {
                dispatch({type: 'resolved', data});
                console.log(data, 'sucsess');
            },
            error => {
                dispatch({type: 'rejected', error});
                console.log('error');
            }
        )

    }, [departmentName])

    const {status, error, department} = departmentState;

    if (status === 'idle' || !departmentName) {
        return 'Submit a department name';
    } else if (status === 'pending') {
        return <DepartmentInfoFallback name={departmentName}/>
    } else if (status === 'rejected') {
        throw error;
    } else if (status === 'resolved') {
        return <DepartmentDataView department={department}/>
    }

    throw new Error('This should never happen')


}

export default DepartmentInfo;
