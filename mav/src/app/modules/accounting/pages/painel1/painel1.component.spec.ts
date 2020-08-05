import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Painel1Component } from './painel1.component';

describe('Painel1Component', () => {
  let component: Painel1Component;
  let fixture: ComponentFixture<Painel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Painel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Painel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
