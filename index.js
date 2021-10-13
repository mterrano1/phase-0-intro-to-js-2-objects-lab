const employee = {
    name: "mike",
    streetAddress: "123 Elm st",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    return {
        newEmployee,
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    const newEmployee = employee;

    newEmployee[name] = value;

    return newEmployee;
}