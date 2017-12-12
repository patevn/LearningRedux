import * as types from './actionTypes';
//action
export function createCourse(course) {
    return { type: types.CREATE_COURSE, course: course };
}
