import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletarUsuarioComponent } from './deletar-usuario.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { of } from 'rxjs';

describe('DeletarUsuarioComponent', () => {
  let component: DeletarUsuarioComponent;
  let fixture: ComponentFixture<DeletarUsuarioComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'usuario_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [DeletarUsuarioComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarUsuarioComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete usuario', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(true); // Simula a confirmação do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).toHaveBeenCalledWith('usuarios/usuario_id');
    expect(router.navigate).toHaveBeenCalledWith(['/listar-usuarios']);
  });

  it('should not delete usuario when canceling', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(false); // Simula o cancelamento do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});