const DepartmentDataView = ({department}) => {
    const {data} = department;
    return (
        <div>
            <div className="department-info__img-wrapper">
                <img src={data.image} alt=""/>
            </div>

            <section>
                <h2> {
                    data.name
                }</h2>
                <sup>{data.id}</sup>
            </section>
            <section>
                {data.description}
            </section>
        </div>
    )


}

export default DepartmentDataView;
