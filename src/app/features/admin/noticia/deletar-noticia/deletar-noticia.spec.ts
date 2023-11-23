import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletarNoticiaComponent } from './deletar-noticia.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { of } from 'rxjs';

describe('DeletarNoticiaComponent', () => {
  let component: DeletarNoticiaComponent;
  let fixture: ComponentFixture<DeletarNoticiaComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'noticia_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [DeletarNoticiaComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarNoticiaComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete noticia', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(true); // Simula a confirmação do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).toHaveBeenCalledWith('noticias/noticia_id');
    expect(router.navigate).toHaveBeenCalledWith(['/listar-noticia']);
  });

  it('should not delete noticia when canceling', () => {
    spyOn(apiService, 'delete').and.returnValue(of({}));

    spyOn(window, 'confirm').and.returnValue(false); // Simula o cancelamento do usuário

    component.confirmarDelecao();

    expect(window.confirm).toHaveBeenCalled();
    expect(apiService.delete).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});