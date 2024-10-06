import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VolverBotonComponent } from './volver-boton.component';

describe('VolverBotonComponent', () => {
  let component: VolverBotonComponent;
  let fixture: ComponentFixture<VolverBotonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VolverBotonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VolverBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
