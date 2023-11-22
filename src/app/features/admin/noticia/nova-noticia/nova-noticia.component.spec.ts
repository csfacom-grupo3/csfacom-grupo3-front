import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaNoticiaComponent } from './nova-noticia.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('NovaNoticiaComponent', () => {
  let component: NovaNoticiaComponent;
  let fixture: ComponentFixture<NovaNoticiaComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaNoticiaComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [ApiService, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaNoticiaComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new noticia', () => {
    const fakeNoticia = { titulo: 'Nova Notícia', conteudo: 'Conteúdo da notícia' };

    spyOn(apiService, 'post').and.returnValue(of(fakeNoticia));

    component.novaNoticiaForm.patchValue(fakeNoticia);
    component.criarNoticia();

    // TODO
  });
});