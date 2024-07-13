import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderedAspectComponent } from './rendered-aspect.component';

describe('RenderedAspectComponent', () => {
  let component: RenderedAspectComponent;
  let fixture: ComponentFixture<RenderedAspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderedAspectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderedAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
