# ALX Frontend JavaScript Project - 0x00 ES6 Basics

This project introduces the basics of ECMAScript 6 (ES6), the sixth edition of the ECMAScript language specification standardized by ECMA International. This project covers various ES6 features like `let`, `const`, arrow functions, template literals, and more.

## Project Structure

The project contains several JavaScript files, each corresponding to a specific task that demonstrates the usage of ES6 features.

## Requirements

- All files are executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint with specific rules provided
- All of your functions must be exported

## Tasks

### Task 0: Const or let?
- Modify `taskFirst` to instantiate variables using `const`
- Modify `taskNext` to instantiate variables using `let`

### Task 1: Block Scope
- Refactor `taskBlock` to avoid variable overwriting inside the conditional block by using `let` or `const`.

### Task 2: Arrow Functions
- Refactor the function to use ES6 arrow function syntax.

### Task 3: Parameter Defaults
- Condense the internals of `getSumOfHoods` to one line by defining default parameter values.

### Task 4: Rest Parameter Syntax
- Modify the function to return the number of arguments passed using the rest parameter syntax.

### Task 5: Spread Syntax
- Use spread syntax to concatenate two arrays and each character of a string.

### Task 6: Template Literals
- Rewrite the return statement to use a template literal.

### Task 7: Object Property Value Shorthand Syntax
- Refactor the `getBudgetObject` function to use object property shorthand.

### Task 8: Computed Property Names
- Use computed property names to simplify the `getBudgetForCurrentYear` function.

### Task 9: ES6 Method Properties
- Refactor the `getFullBudgetObject` function to use ES6 method properties.

### Task 10: For...of Loops
- Refactor the `appendToEachArrayValue` function to use ES6’s `for...of` loop.

### Task 11: Iterator
- Create a function `createEmployeesObject` that takes a department name and an array of employees and returns an object.

### Task 12: Report Object
- Create a function `createReportObject` that returns an object containing all employees and a method to get the number of departments.

## Running the Project

To run any of the tasks, use the command:
```bash
npm run dev <task-file>
npm run dev 0-constants.js
npm test
npm run lint

