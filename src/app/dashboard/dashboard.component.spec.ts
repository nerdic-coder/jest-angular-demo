import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from '../message.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        MockAppHeroSearchComponent
      ],
      imports: [
        RouterModule,
        HttpClientTestingModule
      ],
      providers: [
        HeroService,
        MessageService
      ]
    })
    .compileComponents();
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  selector: 'app-hero-search',
  template: ''
})
class MockAppHeroSearchComponent {
}
