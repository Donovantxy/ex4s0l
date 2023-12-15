import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {

  currentValue!: number;
  step!: string;

  constructor(public readonly localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.step = '1';
    this.currentValue = this.localStorageService.get('counter') || 0;
  }

  updateCounter(isIncreasing = 1): void {
    const newStepValue = this.currentValue + (isIncreasing * Number(this.step));
    if ( newStepValue < 0 || newStepValue === 0) {
      this.currentValue = 0;

    } else {
      this.currentValue = this.currentValue + (isIncreasing * Number(this.step));
    }
    this.storeCurrentCounter();
  }

  reset(): void {
    this.currentValue = 0;
    this.storeCurrentCounter();
  }

  refresh(): void {
    window.location.reload();
  }

  stepChange(ev: KeyboardEvent): void {
    this.step = this.step.replace(/[^\d.]/g, '');
    if ( /.*\..*\./g.test(this.step) ) {
      let chars = this.step.split('.');
      this.step = `${chars[0]}.${chars.slice(1).join('')}`;
    }
  }

  private storeCurrentCounter(): void {
    this.localStorageService.set('counter', this.currentValue);
  }

}
