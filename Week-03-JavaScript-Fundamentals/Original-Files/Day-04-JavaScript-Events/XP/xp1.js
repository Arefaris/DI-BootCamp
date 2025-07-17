// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // Expected: 3
}
funcOne();

// #1.2 - If 'let' is replaced with 'const', this will throw an error:
// function funcOne() {
//     const a = 5;
//     if (a > 1) {
//         a = 3; // ❌ Error: Assignment to constant variable.
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree(); // Expected: 0
funcTwo();
funcThree(); // Expected: 5

// #2.2 - If 'let a = 0' is changed to 'const a = 0', the following will throw an error:
// const a = 0;
// function funcTwo() {
//     a = 5; // ❌ Error: Assignment to constant variable.
// }

// #3
function funcFour() {
    window.a = "hello"; // Global scope (attached to window object)
}
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive(); // Expected: "hello"

// #4
//let a = 1;
function funcSix() {
    let a = "test"; // Local to the function
    alert(`inside the funcSix function ${a}`); // Expected: test
}
funcSix();

// #4.2 - If 'let a = "test"' is replaced with 'const a = "test"', it will still work fine as long as you don’t reassign it

// #5
//let a = 2;
if (true) {
    let a = 5; // Block-scoped, does NOT affect outer `a`
    alert(`in the if block ${a}`); // Expected: 5
}
alert(`outside of the if block ${a}`); // Expected: 2

// #5.2 - If 'let a = 5' is replaced with 'const a = 5', it will still work fine
// since it's a separate block-scoped declaration and not reassigned.
