import {useRef} from "react";
import DepartmentDataView from "./DepartmentDataview";

const DepartmentInfoFallback = ({name}) => {

    const initialName = useRef(name).current

    const fallbackDepartmentData = {
        data: {
            name: initialName,
            image: '',
            fetchedAt: 'loading....'
        }
    }

    return <DepartmentDataView department={fallbackDepartmentData}/>
}

export default DepartmentInfoFallback;
