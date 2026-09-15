import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Garchomp } from './garchomp';

describe('Garchomp', () => {
  let component: Garchomp;
  let fixture: ComponentFixture<Garchomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Garchomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Garchomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
