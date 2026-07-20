# JavaScript

## Introduction
Javascript is a dynamic typed programming language. It is used for developing dynamic web pages and making them interactive. It supports both client side and server side development

- Intrepreted Langugae: Executes code line by line
- Dynamically typed: Varibale types are determined at runtime
- Single Threaded: Executes one task at a time but supports asynchronous operations.
  
### Features
- **Client side Scripting**: It runs on user's browser so it has faster response time without needing to communicate with the server.
- **Versatile**: Canbe used for wide range of tasks from simple calculations to compelex serverside scripting.
- **Event driven**: Respomds to the user actions in real time.
- **Asynchronous**: It can fetch the data  from server without freezing the user interface.
- **Rich Ecosystem**: Supports vast amount of libraries such as angular, react, express, node etc.

### Cline side and Server side nature of JavaScript
- **Client side**:
  - It involves controlling the browser and its DOM (Document Object model). 
  - Handles user events like clicks and form inputs.
  - Common libraries include Angular Js, React Js and Vue Js.
- **Server side**: 
  - It involves interacting with the databases, Manipulating files and generating responses.
  - Node js and frameworks like Express js are widely used for server-side javascript.

### Programming Paradigms in JavaScript
- **Imperative programming**:
  - Focus on how to perform tasks by controlling the flow of computation
  - Simple You instructs the computer what to do in step by step
  - This includes approaches like Procedural and OOP, often uses async/await to handle asynchrounous actions.
  - Example code:
     ```
    //imperative: double the numbers
    let numbers = [1,2,3];
    let doubled = [];

    for (let i =0; i < numbers.length; i++){
        double.push(numbers[i]*2);
    }
    console.log(doubled);
     ```

- **Declarative programming**: 
  -  Focus on what should be done rather than how should be done
  -  Simply You just tell the computer what you want you dont care about the internal steps just seek the final result
  -  It emphasizes describing the desired result, such as with arrow functions, without detailing the steps to achieve it.
  -  Example code:
     ```
     // Declarative: Double the numbers in the List
     let numbers = [1,2,3];

     //we just say map(change) each element multiply by 2
     doubles = numbers.map(num => num*2);

     console.log(doubled);
     ```

## Variables & Data Types
Variables and data types are the fundamental concepts in Javascript used to store and manage data in a program. They define how information is declared, stored and manipulated during execution
### Datatypes
Defines what kind of data it is
- Primitive datatypes
  - Numeric type
    - Number : Represents Integer.<br>
        `let n = 10;`
    - bigint : Represents the Large Integer than Numbers <br>
       `let BigNumber = 23973485703984570938457039845730289;`
  - Non Numeric type
    - String : Represents text with enclosed single or double quotes<br>
        `let name = 'Sumanth;`
    - Boolean : Represents Logical Values like true or false<br>
        `let BooleanValue = true;`
    - Null : Represente intentional absence of any value <br>
        `let NullValue = null;`
    - Undefined : A variable that has bee declared but not assigned any value <br>
        `let NotAssignedValue;`
    - Symbol : Represents unique and immutable vales, often used as object keys.<br>
        `let sym = Symbol('Unique');`
- Non Primitive datatypes
  - object : Represents Key-value pairs
    ```
    let obj = {
        'name': 'Sumanth',
        'age' : 22
    };
    ```
  - arrays : Represents ordered list of values
    ```
    let fruits = ['apple', 'mango', 'banana'];
    ```
  - function : Represents reusable block of code
    ```
    function myfunc() {
        console.log('This is function');
    }
    ```
  - date object
  - regular expression
  
  ### Variables
  Variables are like containers that stores the data that can be reused or updated later in the program
  In JavaScript Variables are declared using the keywords var, let and const.

- **var**
  - It is used to declare a variable that has a function scoped or global scoped behaviour.
    ```
        var n = 5;
        console.log(n)

        var n = 20; // Reassigning is allowed
        console.log(n);
    ```
- **Let**
  - It is introduced in ES6, has block scoped and cannot be redeclared in the same scope but we can re assign 
    ```
    let n = 10;
    n = 20;     //Value can be updated

    let n = 20; //connot re-declared throws error
    console.log(n);
    ```

- **const**
  - It is keyword to declare varibles with block scope behaviour.
  - These varibles cannot be updated
    ```
    const n = 10;
    console.log(n);
    n = 20 // Throws error cannot be updated
    ```
## Operators
Operators are the special characters or symbols that performs specific necessary computational operations.
- Arthematic operators
  - Addition (+) : Adds the two numbers and returns the result value of an operation.
  - Substraction (-) : Substracts the 2nd operand from the 1st operand and returns the value.
  - Multiplication(*) : Multiplies the 1st operand with 2nd operand and return the value.
  - Division (/): Divides the 1st operand with 2nd operand and returns the quotient value.
  - Modulus (%): Divides the 1st operand with 2nd operand and returns the reminder value.
  - Exponential (**): Raises the 1st operand with the power of 2nd operand and returns the value.
  - Increment (++): 
    - PostFix Incrementation(x++) - Returns the operand value and performs incrementation value after returning
    - Prefix Incrementation(++x) - Perfoms Incrementation on operand and return value.
  - Unirary Negation (-) : Converts the Non numbers into numbers and return the value.
  - Unirary Plus (+) : Converts the Non number values into numbers and return the value but much more faster and prefered way.
  - [Referance code](./JavaScript_operators/arithematic_operators.js)
