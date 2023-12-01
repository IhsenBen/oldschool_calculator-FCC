// TODO[]: Make it Dry and clean up the code
// TODO[]: refract the types and the common array operations
export type Display = string[];
export type Operators = "+" | "-" | "*" | "/";
export type Input = number | Operators | "." | "AC" | "CE" | "=" | string;
export type Expression = Input[];

// just chaining inputs in an Array and calculate it on =
// which allowe chaining of operations
class Calculator {
  private isOperator(input: Input): input is Operators {
    return ["+", "-", "*", "/"].includes(input as Operators);
  }

  public handleDisplay(expression: Expression, input: Input): Input {
    const lastItem = expression[expression.length - 1];
    switch (input) {
      case "AC":
        return "0";
      case "CE":
        return lastItem ? lastItem : "0";
      default:
        return lastItem;
    }
  }

  public handleExpression(
    input: Input,
    expression: Expression
  ): Expression | undefined {
    // this is messy needs to be cleaned up
    // TODO[]: make helper function to update the expression
    const lastItem = expression[expression.length - 1];
    const isNumber = !Number.isNaN(Number(input));
    const isLastItemNumber = !Number.isNaN(Number(lastItem));

    switch (input) {
      case "AC":
        return [];
      case "CE":
        expression.pop();
        return expression;
      case "=":
        if (isLastItemNumber) {
          return [this.calculateResult(expression)];
        } else {
          expression.pop();
          if (isLastItemNumber) {
            expression.push(this.calculateResult([lastItem as number]));
          }
          return expression;
        }
      case ".":
        if (isLastItemNumber) {
          expression.pop();
          expression.push(lastItem + input);
          return expression;
        }
        return;
      default:
        if (typeof lastItem === "string" && lastItem.includes(".")) {
          const updatedecimal = `${lastItem}${input}`;
          expression.pop();
          expression.push(Number(updatedecimal));
          return expression;
        }
        if (this.isOperator(lastItem) && this.isOperator(input)) {
          return;
        }
        if (isLastItemNumber && isNumber) {
          const updatedNum = Number(lastItem) * 10 + Number(input);
          expression.pop();
          expression.push(updatedNum);
          return expression;
        } else {
          expression.push(isNumber ? Number(input) : input);
          return expression;
        }
    }
  }

  public calculateResult(expression: Expression): number {
    let result = expression[0] as number;
    for (let i = 1; i < expression.length; i += 2) {
      const operator = expression[i] as Operators;
      const operand = expression[i + 1] as number;

      switch (operator) {
        case "+":
          result += operand;
          break;
        case "-":
          result -= operand;
          break;
        case "*":
          result *= operand;
          break;
        case "/":
          if (operand !== 0) {
            result /= operand;
          } else {
            throw new Error("Division by zero is not allowed.");
          }
          break;
        default:
          break;
      }
    }

    return result;
  }
}

export default Calculator;
