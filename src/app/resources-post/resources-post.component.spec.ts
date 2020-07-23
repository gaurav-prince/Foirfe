import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesPostComponent } from './resources-post.component';

describe('ResourcesPostComponent', () => {
  let component: ResourcesPostComponent;
  let fixture: ComponentFixture<ResourcesPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
