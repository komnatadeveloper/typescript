var userInput;
var userName;
var someText;
userInput = 5;
userInput = 'Max';
// userName = userInput  // Error Type 'unknown' is not assignable to type 'string', and if it was not "unknown" but "any", we wouldn't face any errors
// When we do type check by typeof, this time "unknown" type does not result with an error
if (typeof someText === 'string') {
    userName = someText;
}
console.log('8');
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An Error Occured", 500);
console.log(result);
console.log('4');
