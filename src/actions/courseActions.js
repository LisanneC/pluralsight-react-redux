import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSucces(courses) {
  return { type: types.LOAD_COURSES_SUCCES, courses};
}

export function createCourseSucces(courses) {
  return {type: types.CREATE_COURSE_SUCCES, courses};
}

export function updateCourseSucces(courses) {
  return { type: types.UPDATE_COURSE_SUCCES, courses};
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSucces(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) { // getState access the Redux store and get particular pieces of state that you need to work within the thunk
    return courseApi.saveCourse().then(saveCourse => {
      course.id? dispatch(updateCourseSucces(savedCourse)): //if its true will be updating the course
      dispatch(createCourseSucces(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
