// Write your solution in this file!
let employee = {
    name: "Shad",
    streetAdress:"234"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,...{[key]:value}}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee,key){
    let newObj = {...employee}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}