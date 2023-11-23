import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AlterarUsuarioComponent } from './alterar-usuario.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { of } from 'rxjs';

describe('AlterarUsuarioComponent', () => {
  let component: AlterarUsuarioComponent;
  let fixture: ComponentFixture<AlterarUsuarioComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'usuario_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [AlterarUsuarioComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarUsuarioComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load usuario details', () => {
    const fakeUsuario = { id: 'usuario_id', nome: 'Nome', email: 'email@example.com' };
    spyOn(apiService, 'getById').and.returnValue(of(fakeUsuario));

    component.ngOnInit();

    expect(apiService.getById).toHaveBeenCalledWith('usuarios/usuario_id');
    expect(component.usuario).toEqual(fakeUsuario);
  });

  it('should update usuario details', () => {
    spyOn(apiService, 'put').and.returnValue(of({}));

    spyOn(router, 'navigate');

    component.usuario = { id: 'usuario_id', nome: 'Novo Nome', email: 'novo_email@example.com' };
    component.salvarAlteracoes();

    expect(apiService.put).toHaveBeenCalledWith('usuarios/usuario_id', component.usuario);
    expect(router.navigate).toHaveBeenCalledWith(['/listar-usuarios']);
  });
});