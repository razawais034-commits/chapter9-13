// Task 1
(function task1() {
  let num1 = parseFloat(prompt("Enter first number:"));
  let num2 = parseFloat(prompt("Enter second number:"));
  let op = prompt("Enter operation (+, -, *, /, %):");

  if (op === "+") {
    alert("Result = " + (num1 + num2));
  } else if (op === "-") {
    alert("Result = " + (num1 - num2));
  } else if (op === "*") {
    alert("Result = " + (num1 * num2));
  } else if (op === "/") {
    if (num2 !== 0) {
      alert("Result = " + (num1 / num2));
    } else {
      alert("Error: Division by zero");
    }
  } else if (op === "%") {
    if (num2 !== 0) {
      alert("Result = " + (num1 % num2));
    } else {
      alert("Error: Modulus by zero");
    }
  } else {
    alert("Invalid operator");
  }
})();

// Task 2
(function task2() {
  let sub1 = parseFloat(prompt("Enter marks of Subject 1:"));
  let sub2 = parseFloat(prompt("Enter marks of Subject 2:"));
  let sub3 = parseFloat(prompt("Enter marks of Subject 3:"));
  let total = parseFloat(prompt("Enter total marks:"));

  let obtained = sub1 + sub2 + sub3;
  let percentage = (obtained / total) * 100;
  let grade;

  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 40) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  document.write("Obtained Marks: " + obtained + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
  document.write("Grade: " + grade);
})();

// Task 3
(function task3() {
  let firstNumber = parseInt(prompt("Enter first number:"));
  let secondNumber = parseInt(prompt("Enter second number:"));

  if (firstNumber > secondNumber) {
    document.write("First number is larger: " + firstNumber);
  } else if (secondNumber > firstNumber) {
    document.write("Second number is larger: " + secondNumber);
  } else {
    document.write("Both numbers are equal");
  }
})();

// Task 4
(function task4() {
  let ch = prompt("Enter a character:");
  let code = ch.charCodeAt(0);

  if (code >= 48 && code <= 57) {
    document.write("It is a Number");
  } else if (code >= 65 && code <= 90) {
    document.write("It is an Uppercase Letter");
  } else if (code >= 97 && code <= 122) {
    document.write("It is a Lowercase Letter");
  } else {
    document.write("Invalid Input");
  }
})();

// Task 5
(function task5() {
  let num = parseInt(prompt("Enter a number:"));

  if (num > 0) {
    document.write("Number is Positive");
  } else if (num < 0) {
    document.write("Number is Negative");
  } else {
    document.write("Number is Zero");
  }
})();

// Task 6
(function task6() {
  let ch = prompt("Enter a character:");

  if (
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
  ) {
    document.write("True (It is a vowel)");
  } else {
    document.write("False (Not a vowel)");
  }
})();

// Task 7
(function task7() {
  let correctPassword = "12345";
  let userPassword = prompt("Enter your password:");

  if (userPassword === "" || userPassword === null) {
    document.write("Please enter your password");
  } else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password");
  } else {
    document.write("Incorrect password");
  }
})();

// Task 8
(function task8() {
  var greeting;
  var hour = 13;

  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  document.write(greeting);
})();