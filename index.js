//lesson 1
let result = "";
for (var a = 0; a < 7; a++) {
  result += "#";
  console.log(result);
}

//lesson 2
let input = prompt("yeu cau nhap vao mot so:");
while (input) {
  if (input != +input) {
    alert("ban nhap vao khong phai la so");
    break;
  } else if (input < 10) {
    alert("so ban nhap vao qua nho");
    break;
  }
}
//lesson 3

let input2 = prompt("yeu cau nhap vao 1 so:");
while (+input2 < 0) {
  break;
}
if (+input > 0 && +input2 < 2) {
  alert("ban nhap vao khong phai so nguyen to");
} else if (+input2 > 2) {
  for (let a = 2; a < input2; a++) {
    if (input2 % a === 0) {
      alert("ban nhap vao khong phai so nguyen to");
    } else alert("ban nhap vao la so nguyen to");
    break;
  }
}
//lesson 4
for (let i = 0; i < 9; i++) {
  let a = "";
  for (let k = 9; k > i; k--) {
    a += " ";
  }
  let tree = "";
  let star = 2 * i - 1;
  for (let j = 0; j < star; j++) {
    tree += "*";
  }
  console.log(a + tree);
}
