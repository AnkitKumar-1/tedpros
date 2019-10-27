import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('LoginComponent', () => {

    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HomeComponent],
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
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
      
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });

      it('#ngOnInit', fakeAsync(()=>{
          component.ngOnInit();
          tick();
      }))
    
});