import {pipe} from 'lodash/fp'
import { Map } from 'immutable';

const tri = str => str.trim()
const wrapDiv = str => `<div>${str}</div>`
const input = "   Javascript    "

console.log("hellor",tri(input))
const result = wrapDiv(tri(input))

const transform = pipe(wrapDiv,tri)
let r = transform(input)
console.log(r)

// immutable object 
// first way  object.assign
const person = { name: "John"}

const updated = Object.assign({}, person, { name: "Kamala", age: 80 })
console.log(updated)

// using spread operator 

const sobj = {... person, name: "Jumaa"}

console.log(sobj)

//  the problem with coping object when there is nested object  check the example below
// this is shallow copy

const details = { name: "Janeth",
 address: {
    city: "Dodoma",
    box: 485
}}

const updetails  = { ... details}
updetails.address.city = "Kiomboi singida"

console.log(details) // here the address.city of the original object has been mutated

// solution 

const res = { ... details, 
            address: {
                ... person.address,
                city: "New york"
            }}


console.log(details)

// immutability with arrays 
const array = [1,2,3]
// adding removing and updating an item in this array 
// adding numbe 4 to an array
const added = [8, ... array, 4]
console.log(added)
// inserting an item at a certain index 
const index = array.indexOf(2)
const a = [...array.slice(0,index), ... array.slice(index)]
console.log(a)
// Removing an element we use filter method

const removed = array.filter(el => el !== 2)
console.log(removed)

// using immutable library importing Map from immutable 
const bk = Map({ title: "The prince" })

function publishBook(buk) {
    return buk.set("isPublished", true)
}

let pubbook  = publishBook(bk)
console.log(bk.get("title"))
// returning plain js object 
console.log(pubbook.toJS())




