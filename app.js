// npm -global command, comes eith Node
// npm --version

// local dependency - use it onlly for this particular project
// npm i <packageName>

// global dependency - use it in any projects
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)


// package .json - manifest file(stores important info about projects/packages)
// manual approach (create package.json in the root, create properties etc)
// npm init -y (step by step process, press enter to skip)
// npm inti -y (everything default)

// The following command will display a list of outdated and unused dependencies in your project
// npm install -g npm-check
// npm-check

//npm uninstall <package-name>(remove a package from your project and update the package.json file accordingly.)

const _=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);