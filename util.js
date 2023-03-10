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

module.exports = { toRoleChoice, toEmployeeChoice, toDepartmentChoice }