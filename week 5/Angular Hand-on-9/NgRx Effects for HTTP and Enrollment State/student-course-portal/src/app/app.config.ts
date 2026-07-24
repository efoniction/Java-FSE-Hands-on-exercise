import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { courseReducer } from './store/course/course.reducer';
import { provideEffects } from '@ngrx/effects';

import { CourseEffects } from './store/course/course.effects';

import {

  enrollmentReducer

} from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [

  provideRouter(routes),

  provideHttpClient(
    withInterceptors([
      authInterceptor,
      errorHandlerInterceptor,
      loadingInterceptor
    ])
  ),

 provideStore({

  course:courseReducer,

  enrollment:enrollmentReducer

}),

  provideState(
    'course',
    courseReducer
  ),

  provideStoreDevtools({
    maxAge: 25
  }),

  provideEffects([
    CourseEffects
  ]),

]
};