import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRolesComponent } from './pageRoles.component';

describe('RolesComponent', () => {
  let component: PageRolesComponent;
  let fixture: ComponentFixture<PageRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
