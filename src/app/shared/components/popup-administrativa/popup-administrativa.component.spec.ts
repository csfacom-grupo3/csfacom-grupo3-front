import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAdministrativaComponent } from './popup-administrativa.component';

describe('PopupAdministrativaComponent', () => {
  let component: PopupAdministrativaComponent;
  let fixture: ComponentFixture<PopupAdministrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAdministrativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
