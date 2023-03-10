const toRoleChoice = (anyResult) => ({
    name: anyResult.title,
    value: anyResult.id,
});

const toEmployeeChoice = (anyResult) => ({
    name: `${anyResult.first_name} ${anyResult.last_name}`,
    value: anyResult.id,
})

const toDepartmentChoice = (anyResult) => ({
    name: anyResult.name,
    value: anyResult.id,
})

const employeeName = (anyResult) => ({
    name: `${anyResult.first_name} ${anyResult.last_name}`,
    value: anyResult.first_name,
})

module.exports = { toRoleChoice, toEmployeeChoice, toDepartmentChoice, employeeName }