import {useState} from "react";
import DepartmentForm from "../departments/DepartmentForm";
import DepartmentErrorBoundary from "../departments/DepartmentErrorBoundary";
import DepartmentInfo from "../departments/DepartmentInfo";
import '../App.css';
import DepartmentInfo2 from "../departments/departmentInfo2";

const Departments = () => {
    const [departmentName, setDepartmentName] = useState('');


    const handleSubmit = (newDepartmentName) => {
        setDepartmentName(newDepartmentName);
    }

    const handleReset = () => {
        setDepartmentName('');
    }


    return (<div>
        <DepartmentForm onSubmit={handleSubmit} departmentName={departmentName}/>
        <hr/>
        <div className="department-info">
            <DepartmentErrorBoundary onReset={handleReset} resetKeys={[departmentName]}>
                <DepartmentInfo2 departmentName={departmentName}/>
            </DepartmentErrorBoundary>
        </div>


    </div>)
}

export default Departments;
