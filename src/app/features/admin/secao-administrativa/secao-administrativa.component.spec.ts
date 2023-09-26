import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoAdministrativaComponent } from './secao-administrativa.component';

describe('SecaoAdministrativaComponent', () => {
  let component: SecaoAdministrativaComponent;
  let fixture: ComponentFixture<SecaoAdministrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoAdministrativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
