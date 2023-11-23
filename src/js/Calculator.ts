class Calculator {
  private expression: string[];
  private operator: string;
  private readonly operators: string[] = ["+", "-", "*", "/"];
  private result: number;

  constructor() {
    this.expression = [];
    this.operator = "";
    this.result = 0;
  }
  private isOperator(input: string): boolean {
    return this.operators.includes(input);
  }

  private handleNumber(input: string): void {
        const lastItem = this.expression[this.expression.length - 1];
    if (this.isOperator(lastItem)) {
    this.expression.push(input);
    }
  }

  private handleOperator(input: string): void {
    if (this.expression.length === 0) {
      return;
    }
    const lastItem = this.expression[this.expression.length - 1];
    console.log(lastItem);
    if (!this.isOperator(lastItem)) {
      this.expression.push(input);
    }
  }
  private calculateResult(): void {
    let result = parseFloat(this.expression[0]);

    for (let i = 1; i < this.expression.length; i += 2) {
      const operator = this.expression[i];
      const operand = parseFloat(this.expression[i + 1]);

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
          result /= operand;
          break;
        default:
          break;
      }
    }

    this.result = result;
  }

  public handleClick(input: string): void | number {
    if (this.isOperator(input)) {
      this.handleOperator(input);
    } else {
      this.handleNumber(input);
      console.log(this.expression);
    }
  }
  public getCurrentInput(): string {
    return this.expression.join("");
  }

  public getResult(): number {
    this.calculateResult();
    console.log(`${this.expression.join(" ")} = ${this.result}`);
    return this.result;
  }
}

export default Calculator;
