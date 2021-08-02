export function fetchDepartment(id) {


    return window.fetch(`api/v1/departments/${id}`)
        .then(async response => {
            const {data} = await response.json()
            if (response.ok) {
                const department = data;
                if (department) {
                    return department;
                } else {
                    return Promise.reject(new Error(`No department with the id ${id}`))
                }
            } else {
                const error = {
                    message: data?.errors?.map(e => e.message).join('\n')
                }

                return Promise.reject(error);
            }

        })
}

