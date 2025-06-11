//ex 1
console.log("Hello, World");
//ex2
//let age: number = 1
//let name: string = "name"
//console.log(age, name)
//ex3
var id;
//ex 4
function num(num) {
    if (num === 0) {
        return "zero";
    }
    else if (num > 0) {
        return "positive";
    }
    else {
        return "negative";
    }
}
console.log(num(1));
//ex 5 
var getDetails = function (name, age) {
    return [name, age, "Hello, ".concat(name, "! you are ").concat(age, " years old.")];
};
console.log(getDetails("Alice", 25));
var createPerson = function (name, age) {
    var person = {
        name: name,
        age: age
    };
    return person;
};
console.log(createPerson("bob", 25));
//ex 7
var bob = document.getElementById("bob");
bob.value = "1000";
console.log(bob.value);
//ex 8
var getAction = function (user) {
    switch (user) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited acces";
        default:
            return "Invalid role";
    }
};
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
//ex9
var greet = function (name) {
    if (name === undefined) {
        return "hello guest!";
    }
    else {
        return "hello ".concat(name);
    }
};
console.log(greet());
