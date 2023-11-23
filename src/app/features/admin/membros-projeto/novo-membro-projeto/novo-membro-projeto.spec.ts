import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { NovoMembroProjetoComponent } from './novo-membro-projeto.component';
import { ApiService } from 'src/app/core/service/Api.Service';

describe('NovoMembroProjetoComponent', () => {
  let component: NovoMembroProjetoComponent;
  let fixture: ComponentFixture<NovoMembroProjetoComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    const fakeActivatedRoute = {
      snapshot: { paramMap: { get: () => 'project_id' } }
    };

    await TestBed.configureTestingModule({
      declarations: [NovoMembroProjetoComponent],
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
    fixture = TestBed.createComponent(NovoMembroProjetoComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch users on initialization', () => {
    const fakeUsers = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];

    spyOn(apiService, 'get').and.returnValue(of(fakeUsers));

    fixture.detectChanges(); // Dispara a detecção de mudanças e, portanto, ngOnInit

    expect(component.users.length).toBe(2);
  });

  it('should add member to project', () => {
    spyOn(apiService, 'post').and.returnValue(of({}));

    component.novoMembroForm.setValue({ userId: 'user_id' });
    component.adicionarMembro();

    expect(apiService.post).toHaveBeenCalledWith('projects/project_id/members', { userId: 'user_id' });
    expect(router.navigate).toHaveBeenCalledWith(['/projects', 'project_id']);
  });
});