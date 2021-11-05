const employee = {
    name: "Bob",
    streetAddress: "123 Elm st"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object};

    newEmployee[key] = value;
    
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployeeTwo = {...object};

    delete newEmployeeTwo[key];

    return newEmployeeTwo;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];

    return object;
}