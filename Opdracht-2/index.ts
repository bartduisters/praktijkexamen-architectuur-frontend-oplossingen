const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const printResult = (a: number, b: number, operator: string, result: number): void => {
  console.log(`${a} ${operator} ${b} = ${result}`);
}

const calculate = (a: number, b: number, operator: string): number => {
  switch (operator) {
    case "+":
      printResult(a, b, operator, add(a, b));
      return add(a, b);
    case "-":
      printResult(a, b, operator, subtract(a, b));
      return subtract(a, b);
    case "*":
      printResult(a, b, operator, multiply(a, b));
      return multiply(a, b);
    case "/":
      printResult(a, b, operator, divide(a, b));
      return divide(a, b);
    default:
      console.log("Invalid operator");
      return NaN;
  }
}

calculate(2, 3, "+");
calculate(2, 3, "-");
calculate(2, 3, "*");
calculate(2, 3, "/");
calculate(2, 3, "x");
