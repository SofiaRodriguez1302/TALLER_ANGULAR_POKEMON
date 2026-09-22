import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rayquaza } from './rayquaza';

describe('Rayquaza', () => {
  let component: Rayquaza;
  let fixture: ComponentFixture<Rayquaza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rayquaza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rayquaza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
