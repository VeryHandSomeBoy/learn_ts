interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user2 = {firstName: "Jane", lastName: "User"}

document.body.innerHTML = greeter(user2)