import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxenesiComponent } from './nxenesi.component';

describe('NxenesiComponent', () => {
  let component: NxenesiComponent;
  let fixture: ComponentFixture<NxenesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxenesiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxenesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
