import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  monthlyIncome = '100000';
  constructor() {}

  ngOnInit(): void {}

  getSliderValue(monthlyIncomeSlider: HTMLInputElement) {
    this.monthlyIncome = monthlyIncomeSlider?.value;
    this.getSlider(monthlyIncomeSlider);
  }

  getSlider(mySlide: HTMLInputElement) {
    const min = Number(mySlide?.min);
    const value1 = Number(mySlide?.value);
    const max = Number(mySlide?.max);
    const value = ((value1 - min) / (max - min)) * 100;
    (mySlide as HTMLElement).style.background =
      'linear-gradient(to right, #663399 0%, #663399 ' +
      value +
      '%, #d3d3d3 ' +
      value +
      '%, #d3d3d3 100%)';
  }
}
