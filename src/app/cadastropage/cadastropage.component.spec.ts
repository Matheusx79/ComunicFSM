import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropageComponent } from './cadastropage.component';

describe('CadastropageComponent', () => {
  let component: CadastropageComponent;
  let fixture: ComponentFixture<CadastropageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
