import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentInput: string = '';
  history: string[] = [];
  previousValue: string = '';
  operator: string = '';

  clear() {
    this.currentInput = '';
    this.previousValue = '';
    this.operator = '';
  }

  appendInput(value: string) {
    this.currentInput += value;
  }

  calculate() {
    try {
      if (this.operator) {
        const result = this.evaluateExpression();
        this.history.unshift(`${this.previousValue} ${this.operator} ${this.currentInput} = ${result}`);
        this.currentInput = result.toString();
        this.previousValue = '';
        this.operator = '';
      }
    } catch (error) {
      this.currentInput = 'Error';
    }
  }

  evaluateExpression() {
    const expression = `${this.previousValue} ${this.operator} ${this.currentInput}`;
    switch (this.operator) {
      case '+':
        return parseFloat(this.previousValue) + parseFloat(this.currentInput);
      case '-':
        return parseFloat(this.previousValue) - parseFloat(this.currentInput);
      case '*':
        return parseFloat(this.previousValue) * parseFloat(this.currentInput);
      case '/':
        return parseFloat(this.previousValue) / parseFloat(this.currentInput);
      default:
        return 0;
    }
  }

  calculatePercentage() {
    try {
      const percentage = parseFloat(this.currentInput) / 100;
      this.currentInput = percentage.toString();
      this.history.unshift(`${this.currentInput}% = ${percentage}`);
    } catch (error) {
      this.currentInput = 'Error';
    }
  }

  convertCurrency() {
    // Assuming 1 USD = 0.85 EUR, just as an example
    const conversionRate = 0.85;
    try {
      const convertedAmount = parseFloat(this.currentInput) * conversionRate;
      this.currentInput = convertedAmount.toFixed(2);
      this.history.unshift(`Converted to EUR: ${convertedAmount.toFixed(2)}`);
    } catch (error) {
      this.currentInput = 'Error';
    }
  }

  handleOperator(op: string) {
    if (this.previousValue && this.operator) {
      this.calculate();
    }
    this.operator = op;
    this.previousValue = this.currentInput;
    this.currentInput = '';
  }
}
