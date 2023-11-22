import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarNoticiasComponent } from './listar-noticias.component';
import { ApiService } from 'src/app/core/service/Api.Service';
import { of } from 'rxjs';

describe('ListarNoticiasComponent', () => {
  let component: ListarNoticiasComponent;
  let fixture: ComponentFixture<ListarNoticiasComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarNoticiasComponent],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarNoticiasComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch noticias on init', () => {
    const noticias = [{ id: 1, titulo: 'Notícia 1' }, { id: 2, titulo: 'Notícia 2' }];

    spyOn(apiService, 'get').and.returnValue(of(noticias));

    fixture.detectChanges();

    expect(component.noticias.length).toBe(2);
  });
});