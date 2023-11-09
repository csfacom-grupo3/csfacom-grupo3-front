import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProjetosComponent } from './lista-projetos.component';

describe('ListaProjetosComponent', () => {
  let component: ListaProjetosComponent;
  let fixture: ComponentFixture<ListaProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProjetosComponent]
    });
    fixture = TestBed.createComponent(ListaProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
