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
  } else if (+input < 10) {
    alert("so ban nhap vao qua nho");
    break;
  }
  break;
}

//lesson 3

let input2 = prompt("yeu cau nhap vao 1 so:");
if (input2 <= 0) {
  alert("nhap vao so nguyen duong");
} else if (+input > 0 && +input2 < 2) {
  alert("ban nhap vao khong phai so nguyen to");
} else if (+input2 === 2) {
  alert("ban nhap vao la so nguyen to");
} else if (+input2 > 2) {
  for (let a = 2; a < input2; a++) {
    if (input2 % a === 0) {
      alert("ban nhap vao khong phai so nguyen to");
    } else alert("ban nhap vao la so nguyen to");
    break;
  }
}

//lesson 4
let treeHeight = prompt("nhap vao chieu cao cay thong:");
if (treeHeight > 0) {
  for (i = 1; i < treeHeight; i++) {
    let tree = "";
    let space = "";
    for (j = 1; j <= treeHeight - i; j++) {
      space += " ";
    }

    for (k = 1; k <= 2 * i - 1; k++) {
      tree += "*";
    }
    console.log(space, tree, space);
  }
}
