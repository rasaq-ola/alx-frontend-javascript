// task 1

// Define the Teacher interface
interface Teacher {
  // firstName must be a string and cannot be changed after it's set (readonly)
  readonly firstName: string;

  // lastName must also be a string and readonly
  readonly lastName: string;

  // fullTimeEmployee must always be present and must be a boolean (true or false)
  fullTimeEmployee: boolean;

  // yearsOfExperience is optional (can be there or not), and must be a number
  yearsOfExperience?: number;

  // location is required and must be a string
  location: string;

  // This line says: allow any other properties (like 'contract') with any name and any value
  [key: string]: any;
}

// Create a teacher object using the interface
const teacher3: Teacher = {
  firstName: 'John',           // Required and readonly
  fullTimeEmployee: false,     // Required
  lastName: 'Doe',             // Required and readonly
  location: 'London',          // Required
  contract: false,             // Extra property, allowed by [key: string]: any
};

// Log the teacher object to the console to see the result
console.log(teacher3);

// task 2

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1:Directors = {
    firstName: "Ola",
    lastName: "Rasaq",
    yearOfExperience: 30,
    location: "Lagos",
    fullTimeEmployee: false,
    contract: false,
    numberOfReports: 17
}

console.log(director1);

// task 3

// Define a function interface: it takes two strings and returns a string
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// task 4

// Interface for the Student class constructor
// It specifies that a constructor takes two strings and returns an instance of StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass itself (the methods it must have)
interface StudentClass {
  workOnHomework(): string;      // A method that returns a string
  displayName(): string;         // A method that returns a string
}

// Implement the StudentClass based on the interface
class Student implements StudentClass {
  // Define the properties (firstName and lastName) for the class
  private firstName: string;
  private lastName: string;

  // The constructor method that initializes the properties
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Implement the workOnHomework method
  workOnHomework(): string {
    return 'Currently working';
  }

  // Implement the displayName method
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new Student('John', 'Doe');
console.log(student1.displayName()); // Output: John
console.log(student1.workOnHomework()); // Output: Currently working
