import {pipe} from 'lodash/fp'
const tri = str => str.trim()
const wrapDiv = str => `<div>${str}</div>`
const input = "   Javascript    "

console.log("hellor",tri(input))
const result = wrapDiv(tri(input))

const transform = pipe(wrapDiv,tri)
let r = transform(input)
console.log(r)

// immutable object 
// first way 
const person = { name: "John"}

const updated = Object.assign({}, person, { name: "Kamala", age: 80 })

