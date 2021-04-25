function sayHello() {
    return function(){
        return "Hello world"
    }
}

function greet(fnMessage) {
    console.log(fnMessage())
}

greet(sayHello)

let fn = sayHello();
let msg = fn()