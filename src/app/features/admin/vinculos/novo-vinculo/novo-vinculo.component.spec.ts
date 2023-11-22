import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoVinculoComponent } from './novo-vinculo.component';

describe('NovoVinculoComponent', () => {
  let component: NovoVinculoComponent;
  let fixture: ComponentFixture<NovoVinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoVinculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoVinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
