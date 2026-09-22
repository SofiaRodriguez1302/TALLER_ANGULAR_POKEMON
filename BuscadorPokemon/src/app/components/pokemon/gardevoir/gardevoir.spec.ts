import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gardevoir } from './gardevoir';

describe('Gardevoir', () => {
  let component: Gardevoir;
  let fixture: ComponentFixture<Gardevoir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gardevoir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gardevoir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
