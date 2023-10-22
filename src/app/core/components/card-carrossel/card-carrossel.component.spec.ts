import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarrosselComponent } from './card-carrossel.component';

describe('CardCarrosselComponent', () => {
  let component: CardCarrosselComponent;
  let fixture: ComponentFixture<CardCarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarrosselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
