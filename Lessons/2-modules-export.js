const name='roshan'//module.exports.names='roshan'//this ADDS in the exports json as key value pair as {names:'roshan'}
const lastName='Dhakal'

function sayHi(nam){
    return(`Hello${nam}`);
}
module.exports={name,lastName,sayHi};//overwrites all the exports above it
//NEXT METHOD// module.exports.sayHi=function sayHi(){return ('bye')}

//After this in next file

const names=require('./2-modules-export')
const firstName=names.name
const greet = names.sayHi(firstName)
console.log(greet);

//NEXT WAY

module.exports.items=['car','dog']// this ADDS in the exports json as key value

//and in next file

const a=require('./2-modules-export')
console.log(a.items)