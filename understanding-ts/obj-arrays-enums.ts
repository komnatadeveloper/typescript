// const person: {
//   name: string;
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Maximilian',
//   age:30,
//   hobbies: [ 'Sports', 'Cooking'],
//   role: [2, 'author']
// }

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR };
enum Role { ADMIN = 5 , READ_ONLY , AUTHOR };
const person = {
  name: 'Maximilian',
  age:30,
  hobbies: [ 'Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: any[] ;


console.log(person.name)
// console.log(person.nickname)

for( const hobby of person.hobbies) {
  console.log(hobby)
}

if(person.role === Role.AUTHOR) {
  console.log('is author')
  }

  console.log(Role)