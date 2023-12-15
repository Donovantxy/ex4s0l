import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../../services/local-storage.service';
import { spyLocalStorageService } from '../../../testkit/spies';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let storageService: jasmine.SpyObj<LocalStorageService>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    storageService = spyLocalStorageService();

    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatIconModule
      ],
      providers: [
        { provide: LocalStorageService, useValue: storageService },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
