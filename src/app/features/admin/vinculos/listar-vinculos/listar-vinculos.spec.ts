import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVinculosComponent } from './listar-vinculos.component';

describe('ListarVinculosComponent', () => {
  let component: ListarVinculosComponent;
  let fixture: ComponentFixture<ListarVinculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVinculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVinculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});