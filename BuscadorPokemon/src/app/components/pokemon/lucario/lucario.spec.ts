import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucario } from './lucario';

describe('Lucario', () => {
  let component: Lucario;
  let fixture: ComponentFixture<Lucario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lucario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lucario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
