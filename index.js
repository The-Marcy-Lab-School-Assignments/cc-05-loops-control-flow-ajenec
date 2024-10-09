//1

const multiplesOfSixAndNine = () => {
  let product = 0;
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 9 === 0) {
      product += i;
    }
  }
  return product;
};
//console.log(multiplesOfSixAndNine());

//2
const greaterNum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return "both integers are equal";
    } else if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return "null";
  }
};
console.log(greaterNum("1.14", 1.14));
console.log(greaterNum(10, 7)); //returns 10
console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
console.log(greaterNum("21", 21)); //returns null
console.log(greaterNum("21", "21")); //returns null
//3
//4
