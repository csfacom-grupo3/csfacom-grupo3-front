import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ListarMembrosProjetoComponent } from './listar-membros-projeto.component';
import { ApiService } from 'src/app/core/service/Api.Service';

describe('ListarMembrosProjetoComponent', () => {
  let component: ListarMembrosProjetoComponent;
  let fixture: ComponentFixture<ListarMembrosProjetoComponent>;
  let apiService: ApiService;
  let fakeActivatedRoute: any;

  beforeEach(() => {
    fakeActivatedRoute = {
      paramMap: of({ get: () => 'project_id' })
    };

    TestBed.configureTestingModule({
      declarations: [ListarMembrosProjetoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ApiService // Simulando ApiService
      ]
    });

    fixture = TestBed.createComponent(ListarMembrosProjetoComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch members on init', () => {
    const fakeMembers = [{ id: 1, name: 'Member 1' }, { id: 2, name: 'Member 2' }];

    spyOn(apiService, 'get').and.returnValue(of(fakeMembers));

    component.ngOnInit();

    expect(component.members.length).toBe(2);
  });
});