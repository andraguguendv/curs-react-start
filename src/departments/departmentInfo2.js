import {useCallback, useMemo} from "react";
import DepartmentInfoFallback from "./DepartmentInfoFallback";
import DepartmentDataView from "./DepartmentDataview";
import useAsync from "./useAsync";
import {fetchDepartment} from "./fetchDepartment";

const DepartmentInfo2 = ({departmentName}) => {

    const departmentsMap = useMemo(() => {
        return {
            'Technology Systems department': '61026408fe992b73cca3c070',
            'Business department': '6102636efe992b73cca3c063',
            'HR department': '61026311fe992b73cca3c056',
            'IT department': '60f1314f8069e6d6724d08ca'
        }
    }, [])

    const asyncCallback = useCallback(() => {
        if (!departmentName) {
            return;
        }


        return fetchDepartment(departmentsMap[departmentName]);
    }, [departmentName, departmentsMap])

    const state = useAsync({status: departmentName ? 'pending' : 'idle'}, asyncCallback, [departmentName, asyncCallback]);


    const {status, error, data: department} = state;

    console.log(state, department, 'data before render');

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

export default DepartmentInfo2;
