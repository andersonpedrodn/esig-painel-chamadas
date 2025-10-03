import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadaDestaqueComponent } from './chamada-destaque.component';

describe('ChamadaDestaqueComponent', () => {
  let component: ChamadaDestaqueComponent;
  let fixture: ComponentFixture<ChamadaDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadaDestaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadaDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
