var num = -9;
while (num < 19) {
  console.log(num);
  num++;
}

var evenNum = 12;

while (evenNum < 40) {
  console.log(evenNum);
  evenNum += 2;
}

var oddNum = 301;

while (oddNum < 333) {
  console.log(oddNum);
  oddNum += 2;
}

var divNum = 6;

while (divNum < 50) {
  if (divNum % 5 === 0 && divNum % 3 === 0) {
    console.log(divNum);
  }
  divNum++;
}
