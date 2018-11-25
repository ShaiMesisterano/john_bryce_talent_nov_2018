let names = ['david', 'moshe', 'eli', 'nachum', 'miriam', 'ami'];
let grades = [98, 62, 58, 70, 100, 90];

const threeLettersNames = names.filter( name => name.length === 3);
// console.log(threeLettersNames);

const sortedNames = names.sort();
const sortedGrades = grades.sort( (a,b) => a - b );

const mergedData = sortedNames.map( (name, index) => ({ name: name, grade: sortedGrades[index]}) );
console.log(mergedData);

const _names = [];
const reducedData = names.reduce( (acc, name) => {
    _names.push({ name: name, grade: grades[acc] });
    return ++acc;
}, 0 )
console.log(_names);

const doubleNumbers = [1, 2, 3].reduce( (acc, num) => {
    return acc.concat(num * 2)
}, [] );
console.log(doubleNumbers);

const objNames = names.reduce( (acc, name) => {
    let i = 0;
    while (i + 1 <=name.length -1) {
        let key = name[i] + name[i+1];
        acc[key] = acc[key] || [];
        acc[key].push(name);
        i++;
    }
    return acc;
}, {} );

console.log(objNames);
console.log(objNames['ri']);