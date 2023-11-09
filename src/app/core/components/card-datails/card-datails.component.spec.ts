import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDatailsComponent } from './card-datails.component';

describe('CardDatailsComponent', () => {
  let component: CardDatailsComponent;
  let fixture: ComponentFixture<CardDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDatailsComponent]
    });
    fixture = TestBed.createComponent(CardDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
