const skills = [
    {id: 12355, skill: 'Use JavaScript'},
    {id: 12345, skill: 'Use Node'},
    {id: 12325, skill: 'HTML'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now() % 100000;
    skills.push(skill);
}

function deleteOne(id) {
   const idx = skills.findIndex(skill => skill.id === parseInt(id));
   skills.splice(idx, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};