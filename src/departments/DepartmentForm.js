import {useState} from "react";

const DepartmentForm = ({
                            onSubmit,
                            departmentName: externalDepartmentName,
                            initialDepartmentName = externalDepartmentName || ""
                        }) => {

    const [departmentName, setDepartmentName] = useState(initialDepartmentName)


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(departmentName);
    }

    const handleChange = (e) => {
        setDepartmentName(e.target.value);
    }

    const handleSelect = (newDepartmentName) => {
        setDepartmentName(newDepartmentName);
        onSubmit(newDepartmentName);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="departmentName-input">Department name</label>
            <small>try {''}
                <button className="invisible-button" onClick={() => handleSelect('')}></button>
                {','}
                <button className="invisible-button" onClick={() => handleSelect('')}></button>
                {','}
                <button className="invisible-button" onClick={() => handleSelect('')}></button>
                {','}


            </small>

            <div>
                <input type="text" className="departmentName-input" value={departmentName} onChange={handleChange}/>
                <button disabled={!departmentName.length} onClick={handleSubmit} type="submit">Search for a department
                </button>
            </div>


        </form>
    )
}


export default DepartmentForm;
