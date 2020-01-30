let userInput: unknown;
let userName: string;
let someText: string;

userInput = 5;
userInput = 'Max';

// userName = userInput  // Error Type 'unknown' is not assignable to type 'string', and if it was not "unknown" but "any", we wouldn't face any errors

// When we do type check by typeof, this time "unknown" type does not result with an error
if( typeof someText ==='string') {
  userName = someText
}


console.log('8')

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code}
}

const result = generateError("An Error Occured", 500);
console.log(result);
console.log('4')

