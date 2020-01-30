// Creating a new type, and this type is a union
type Combinable = number | string

function combine(
  input1: Combinable, // using this union type
  input2: number | string, // creating union type here
  resultConversion: 'as-number' | 'as-text' // also a union with defined values
  ) {
  let result;
  
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2  // + makes this a number calculation
  } else {
    result = input1.toString() + input2.toString()
  }

  // if(resultConversion === 'as-number') {
  //   return +result;  // + sign Converts to number
  // } else {
  //   return result.toString();
  // }

  return result
}

// combine( '4', 6)
combine( 5, 6, 'as-number')

console.log(combine(5, 6, "as-number"));
console.log(combine('5', '6', "as-number"));
console.log(combine("Max", "Anna", "as-text"));
