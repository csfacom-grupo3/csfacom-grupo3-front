import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletarProjetoComponent } from './deletar-projeto.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { of } from 'rxjs';

describe('DeletarProjetoComponent', () => {
  let component: DeletarProjetoComponent;
  let fixture: ComponentFixture<DeletarProjetoComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'projeto_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [DeletarProjetoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarProjetoComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete projeto', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(true); // Simula a confirmação do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).toHaveBeenCalledWith('projetos/projeto_id');
    expect(router.navigate).toHaveBeenCalledWith(['/listar-projetos']);
  });

  it('should not delete projeto when canceling', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(false); // Simula o cancelamento do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});