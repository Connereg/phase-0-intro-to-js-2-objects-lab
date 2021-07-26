// Write your solution in this file!

const employee = {
    name: 'Conner',
    streetAddress: '88 Starr'
} 

function updateEmployeeWithKeyAndValue(employee, name, newName) {
    const updatedEmployee = {...employee };
    updatedEmployee[name] = newName;
    return updatedEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, newName) {
    employee[name] = newName;
    return employee
}

function deleteFromEmployeeByKey(employee, name){
    const updatedEmployee = {...employee};
    delete updatedEmployee.name;
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}