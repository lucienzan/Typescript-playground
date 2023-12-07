// Number Type
let num1 = 0o10;
//num1 = "34"; // compile error

let num2: number;
num2 = 2.4;
//num2 = "2"; // compile error

let num3: number = 34;
num3 = 45.990;
console.log(num3); // 45

// String Type
let firstName : string = 'John';
let lastName: string = 'Doe';
firstName = 'Jane';
lastName = 'Smith';

let description = `
 this is
 my first long description
 with long 
`;
console.log(description.charAt(0))

// Boolean Type
// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

// AND operator
const hasError: boolean = false;
const completed: boolean = true;

// OR operator
let result = completed && hasError; 
console.log(result); // false

result = completed || hasError; 
console.log(result); // true

// Object
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};

let vacant: {} = {};
console.log(vacant.toString()); // [object Object]
console.log(employee.lastName)

// Array
let skills: string[] = [];
skills[0] = "C#";
skills[1] = "PHP";

let numbers: number[] = [1, 2, 3];
numbers.push(4);  // Adds 4 to the end of the array
let lastNumber = numbers.pop();  // Removes and returns the last element (4 in this case)
console.log(lastNumber);

numbers.unshift(0);  // Adds 0 to the beginning of the array
let firstNumber = numbers.shift();  // Removes and returns the first element (0 in this case)
console.log(firstNumber);

let moreNumbers: number[] = [5, 6, 7];
let combined: number[] = numbers.concat(moreNumbers);  // Concatenates two arrays

numbers.forEach(x => console.log(x));  // Iterates over each element in the array

let evens: number[] = numbers.filter(x => x % 2 === 0);  // Creates a new array with only even numbers

let sliced: number[] = numbers.slice(1, 3);  // Creates a new array containing elements from index 1 to 2 (exclusive)
console.log(sliced); // 2,3

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];

let fruits : any[] = ["apple","orange","banana","grape","melon","dragon fruit",2];
let fruitBasket = ["apple","orange","banana","grape","melon","dragon fruit",2];

// Enum
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected
};

const request =  {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
  // send an email
  console.log('Send email to the Applicant...');
}

// Tuple
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

let skill: [string, number];
skill = ['Programming', 5];
// skill = [5,'Programming']; // compile error

// Any
let result1;
// or
let result2: any;

// Never
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function processValue(val: string | number) {
  if (typeof val === 'string') {
      // val is string
  } else if (typeof val === 'number') {
      // val is number
  } else {
      assertNever(val); // This line ensures that val is never.
  }
}

processValue("90");

// string literal
function displayMessage(message: 'info' | 'warning' | 'error'): void {
  console.log(message);
}

displayMessage('info'); // valid
displayMessage('warning'); // valid

// The following would be invalid:
// displayMessage('success');
// displayMessage('invalid');


