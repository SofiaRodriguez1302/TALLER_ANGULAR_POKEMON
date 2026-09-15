import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eevee } from './eevee';

describe('Eevee', () => {
  let component: Eevee;
  let fixture: ComponentFixture<Eevee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eevee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eevee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
