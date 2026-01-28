import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRenderComponent } from './field-render-component';

describe('FieldRenderComponent', () => {
  let component: FieldRenderComponent;
  let fixture: ComponentFixture<FieldRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldRenderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
