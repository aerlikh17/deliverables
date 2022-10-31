const skills = [
    {skill: 'Use JavaScript'},
    {skill: 'Use Node'},
    {skill: 'HTML'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    console.log(skill)
    skills.push(skill);
    console.log(skills)
}

function deleteOne(id) {
   const idx = skills.findIndex(skill => skill.id === parseInt(id));
   skills.splice(idx, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne
};