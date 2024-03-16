const name='roshan'
const lastName='Dhakal'

function sayHi(nam){
    return(`Hello${nam}`);
}
function sayHii(nam){
    return(`Hello${nam}`);
}

// module.exports={name,lastName}
module.exports={sayHi};//only this will be imported as it overwrites above export
module.exports={sayHii};//only this will be imported as it overwrites above export


// //After this in next file

const names=require('./2-modules')
const firstName=names.name
const greet = names.sayHi(firstName)
console.log(greet);

// //next way

module.exports.items=['car','dog']

//and in next file

const a=require('./2-modules')
console.log(a.items)