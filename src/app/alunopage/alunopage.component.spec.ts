import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunopageComponent } from './alunopage.component';

describe('AlunopageComponent', () => {
  let component: AlunopageComponent;
  let fixture: ComponentFixture<AlunopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
