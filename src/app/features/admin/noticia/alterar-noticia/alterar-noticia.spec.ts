import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AlterarNoticiaComponent } from './alterar-noticia.component';
import { ApiService } from 'src/app/core/service/Api.Service';

describe('AlterarNoticiaComponent', () => {
  let component: AlterarNoticiaComponent;
  let fixture: ComponentFixture<AlterarNoticiaComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'noticia_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [AlterarNoticiaComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService,
        FormBuilder,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarNoticiaComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load noticia on initialization', () => {
    const fakeNoticia = { id: 'noticia_id', titulo: 'Título da Notícia', conteudo: 'Conteúdo da Notícia' };

    spyOn(apiService, 'getById').and.returnValue(of(fakeNoticia));
    component.ngOnInit();

    expect(apiService.getById).toHaveBeenCalledWith('noticias/noticia_id');
    expect(component.alterarNoticiaForm.value.titulo).toBe('Título da Notícia');
    expect(component.alterarNoticiaForm.value.conteudo).toBe('Conteúdo da Notícia');
  });

  it('should update noticia', () => {
    spyOn(apiService, 'getById').and.returnValue(of({}));
    spyOn(apiService, 'put').and.returnValue(of({}));

    component.alterarNoticiaForm.setValue({ titulo: 'Novo Título', conteudo: 'Novo Conteúdo' });
    component.salvarAlteracoes();

    expect(apiService.put).toHaveBeenCalledWith('noticias/noticia_id', { titulo: 'Novo Título', conteudo: 'Novo Conteúdo' });
    expect(router.navigate).toHaveBeenCalledWith(['/listar-noticia']);
  });
});