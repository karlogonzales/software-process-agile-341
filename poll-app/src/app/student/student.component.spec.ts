import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentComponent } from './student.component';


describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(StudentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should be incremented', () =>
  {
    component.incrementFreqA(component.question)
    component.question[0]
  })


});


