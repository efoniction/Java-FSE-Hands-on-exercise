import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CourseService } from '../../services/course';

import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure
} from './course.actions';

import {
  switchMap,
  map,
  catchError,
  of
} from 'rxjs';

@Injectable()
export class CourseEffects {

  constructor(

    private actions$: Actions,
    private courseService: CourseService

  ) {}

  loadCourses$ = createEffect(() =>

    this.actions$.pipe(

      ofType(loadCourses),

      switchMap(() =>

        this.courseService.getCourses().pipe(

          map(courses =>
            loadCoursesSuccess({ courses })
          ),

          catchError(error =>

            of(

              loadCoursesFailure({

                error: error.message

              })

            )

          )

        )

      )

    )

  );

}