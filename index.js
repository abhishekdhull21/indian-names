const { names } = require("./src/data/names")

const get = (list) => {
    return list[Math.floor(Math.random() * list.length)]; 
}

const generateRandomName = (data) => {
    if(!data) return get(names)?.name;
    if(!Array.isArray(data)) return "data should be an array";
    return get(data);
}
const getNameWith = (name) => {
    if(!name) return generateRandomName();

}



const generateMaleRandomName = () => {
    return generateRandomName(names.filter(data => data.gender === "m"));
}
const generateFemaleRandomName = () => {
    return generateRandomName(names.filter(data => data.gender === "f"));

}

getManyNames = (size = 20) => {
    const newNames = [];
    for(let i = 0; i < size; i++){
        let name = generateRandomName();
        console.log(name);
        if(newNames.findIndex(v => v.name === name) == -1){
            newNames.push(name);
            continue;
        }
        i--;
    }
    return newNames;
}


module.exports = {
    generateRandomName,
    getNameWith,
    getManyNames
}