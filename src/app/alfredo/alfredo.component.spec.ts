import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfredoComponent } from './alfredo.component';

describe('AlfredoComponent', () => {
  let component: AlfredoComponent;
  let fixture: ComponentFixture<AlfredoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfredoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlfredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
