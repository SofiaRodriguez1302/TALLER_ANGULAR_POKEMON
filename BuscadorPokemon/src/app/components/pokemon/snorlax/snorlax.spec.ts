import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snorlax } from './snorlax';

describe('Snorlax', () => {
  let component: Snorlax;
  let fixture: ComponentFixture<Snorlax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snorlax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snorlax);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
