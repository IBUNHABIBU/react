function sayHello() {
    return "Hello world"
}

function greet(fnMessage) {
    console.log(fnMessage())
}

greet(sayHello)