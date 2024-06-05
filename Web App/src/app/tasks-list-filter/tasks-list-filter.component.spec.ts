import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListFilterComponent } from './tasks-list-filter.component';

describe('TasksListFilterComponent', () => {
  let component: TasksListFilterComponent;
  let fixture: ComponentFixture<TasksListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksListFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
