
const restApi = `http://localhost:8082/emp`;
const restApi1 = `http://localhost:8082/dept`;


const getAllEmps = () => {
    console.log(`getAllEmps`);
    fetch(`${restApi}/get-all-emps`)
        .then(data => data.json())
        .then((json) => {
            console.log(json);
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch(() => {
            document.getElementById("empList").innerHTML = 'Something is wrong!';
        });
}

const addEmp = () => {
    console.log(`addEmp`);
    fetch(`${restApi}/add-emp`, {
        body: JSON.stringify({
            firstName: document.getElementById("firstName").value,
            salary: document.getElementById("salary").value,
            department: {
                departmentId: document.getElementById("departmentId").value
            }
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empAdded").innerHTML = response;
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        })
        .catch(() => {
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        });
}

const getEmpByFirstName = (firstName) => {

    console.log(`getEmpByFirstName`);

    fetch(`${restApi}/get-emp-by-first-name/${firstName}`, { method: 'GET' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("emp").innerHTML = JSON.stringify(response);

            document.getElementById("firstName").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("firstName").value = '';

            document.getElementById("emp").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}

const getEmpByAadhar = (aadhar) => {

    console.log(`getEmpByAadhar`);

    fetch(`${restApi}/get-emp-by-aadhar/${aadhar}`, { method: 'GET' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("empData").innerHTML = JSON.stringify(response);

            document.getElementById("aadhar").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("aadhar").value = '';

            document.getElementById("empData").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}


const getEmpByCity = (city) => {

    console.log(`getEmpByCity`);

    fetch(`${restApi}/get-emp-by-city/${city}`, { method: 'GET' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("empCity").innerHTML = JSON.stringify(response);

            document.getElementById("city").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("city").value = '';

            document.getElementById("empCity").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}




const updateEmp = () => {
    console.log(`updateEmp`);
    fetch(`${restApi}/update-emp`, {
        body: JSON.stringify({
            employeeId: document.getElementById("updateEmployeeId").value,
            firstName: document.getElementById("updateFirstName").value,
            salary: document.getElementById("updateSalary").value,
            department: {
                departmentId: document.getElementById("updateDepartmentId").value
            }
        }),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empUpdated").innerHTML = response;
            document.getElementById("updateEmployeeId").value = '';
            document.getElementById("updateFirstName").value = '';
            document.getElementById("updateSalary").value = '';
            document.getElementById("updateDepartmentId").value = '';
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("updateEmployeeId").value = '';
            document.getElementById("updateFirstName").value = '';
            document.getElementById("updateSalary").value = '';
            document.getElementById("updateDepartmentId").value = '';

        });
}

const delEmp = (eid) => {

    console.log(`delEmpById`);

    fetch(`${restApi}/delete-emp-by-id/${eid}`, { method: 'DELETE' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("delEmp").innerHTML = JSON.stringify(response);

            document.getElementById("delId").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("delEmp").value = '';

            document.getElementById("delId").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}


const getDeptById = (deptId) => {

    console.log(`getEmpById`);

    fetch(`${restApi1}/get-dept-by-id/${deptId}`, { method: 'GET' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("getDeptById").innerHTML = JSON.stringify(response);

            document.getElementById("did").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("did").value = '';

            document.getElementById("getDeptById").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}


const addDept = () => {

    console.log(`addDept`);

    fetch(`${restApi1}/add-dept`, {

        body: JSON.stringify({

            departmentName: document.getElementById("departmentName").value,

            city: document.getElementById("city").value

        }),

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        }

    })

        .then(data => data.json())

        .then((json) => {

            response = JSON.stringify(json);

            console.log(response);

            document.getElementById("deptAdded").innerHTML = response;

            document.getElementById("departmentName").value = '';

            document.getElementById("city").value = '';

        })

        .catch(() => {

            document.getElementById("deptAdded").innerHTML = 'Something is wrong!';

            document.getElementById("departmentName").value = '';

            document.getElementById("city").value = '';

        });

}


const updateDept = () => {

    console.log(`updateDept`);

    fetch(`${restApi1}/update-dept`, {

        body: JSON.stringify({

            departmentId:document.getElementById("udid").value,

            departmentName: document.getElementById("udepartmentName").value,

            city: document.getElementById("ucity").value

        }),

        method: 'PUT',

        headers: {

            'Content-Type': 'application/json'

        }

    })

        .then(data => data.json())

        .then((json) => {

            response = JSON.stringify(json);

            console.log(response);

            document.getElementById("deptUpdate").innerHTML = response;

            document.getElementById("udid").value = '';

            document.getElementById("udepartmentName").value = '';

            document.getElementById("ucity").value = '';

        })

        .catch(() => {

            document.getElementById("deptUpdate").innerHTML = 'Something is wrong!';

            document.getElementById("udid").value = '';

            document.getElementById("udepartmentName").value = '';

            document.getElementById("ucity").value = '';

        });

}

const delDept = (eid) => {

    console.log(`delDeptById`);

    fetch(`${restApi1}/delete-emp-by-id/${eid}`, { method: 'DELETE' })

        .then(data => {

            return data.json();

        })

        .then((response) => {

            document.getElementById("delDept").innerHTML = JSON.stringify(response);

            document.getElementById("delDeptId").value = '';

            console.log(JSON.stringify(response));



        })

        .catch((error) => {

            document.getElementById("delDept").value = '';

            document.getElementById("delDeptId").innerHTML = 'Something is wrong!';

            console.log(error);

        });

}

