import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoAdicaoComponent } from './sucesso-adicao.component';

describe('SucessoAdicaoComponent', () => {
  let component: SucessoAdicaoComponent;
  let fixture: ComponentFixture<SucessoAdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoAdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
