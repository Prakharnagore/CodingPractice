process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  let lineOne = inputString[0]
    .trim()
    .split(" ")
    .map((string) => {
      return string.trim();
    });
  let n = parseInt(lineOne[0]);
  let k = parseInt(lineOne[1]);
  let array = inputString[1].split(" ").map((string) => parseInt(string));
  let s = solve(array, n, k);
  process.stdout.write(`${s}`);
});

function solve(arr, len, k) {
  // console.log(arr, len, k);
  // console.log(arr, len, k);
  let seq = [];
  let sum = 0;
  let elementsInEachArr = Math.floor(len / k);
  let start = 0;

  let end = elementsInEachArr;
  //find possible spit
  for (let i = 0; i < k; i++) {
    let newArr = arr.slice(start, end);
    seq.push(newArr);
    start = end;
    end = elementsInEachArr + end;
  }

  for (let j = 0; j < seq.length; j++) {
    let newArr = seq[j];
    let difference;
    if (newArr.length > 1) {
      let max = Math.max(...newArr);
      let min = Math.min(...newArr);
      difference = max - min;
    } else {
      difference = seq[j];
    }
    sum += difference;
  }

  // divide sub array in k

  // find difference of each array by looping

  // calculate sum
  return sum;
}
