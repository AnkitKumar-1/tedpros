import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {

    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [RegisterComponent],
          providers: [

          ],
          imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
           
          ]
        })
          .compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
      
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('#ngOnInit', fakeAsync(()=>{
          component.ngOnInit();
          tick();
      }));


      it('#onSubmit', fakeAsync(()=>{
        component.onSubmit();
        tick();
    }));
    
});