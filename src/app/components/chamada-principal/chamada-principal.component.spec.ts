import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaPrincipalComponent } from './chamada-principal.component';

describe('ChamadaPrincipalComponent', () => {
  let component: ChamadaPrincipalComponent;
  let fixture: ComponentFixture<ChamadaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadaPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
