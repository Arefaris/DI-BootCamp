let pattern = "";
let stars = "";

for (let i = 1; i <= 6; i++) {
  stars += "* ";
  pattern += stars.trim() + "\n";
}

console.log(pattern);


let pattern2 = "";

for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  pattern2 += line.trim() + "\n";
}

console.log(pattern2);