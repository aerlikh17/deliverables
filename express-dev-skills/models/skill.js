const skills = [
    {id: 14573, skill: 'Use JavaScript'},
    {id: 57382, skill: 'Use Node'},
    {id: 46368, skill: 'HTML'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

module.exports = {
    getAll,
    getOne
};