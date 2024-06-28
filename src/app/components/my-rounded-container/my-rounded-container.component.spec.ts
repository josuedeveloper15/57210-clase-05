import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRoundedContainerComponent } from './my-rounded-container.component';

describe('MyRoundedContainerComponent', () => {
  let component: MyRoundedContainerComponent;
  let fixture: ComponentFixture<MyRoundedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyRoundedContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRoundedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
