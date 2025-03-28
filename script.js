let number = +prompt("Enter the number of lines");
let character = prompt("Enter the Character");

// function pattern(number, character) {
//   for (let i = 1; i <= number; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {

//       row += character;
//     }
//     console.log(row);
//   }
// }
// pattern(number, character);

function pattern(number, character, i = 1, row = "", result = "") {
  if (i > number) {
    alert(result);
    return;
  } else if (row.length < i) {
    row += character;
    return pattern(number, character, i, row, result);
  }
  console.log(row);
  result += row + "\n";
  pattern(number, character, i + 1, "", result);
}
pattern(number, character);
