import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case types.UPDATE_COURSE_SUCCESS:
      // remove the course being updated and add it's new representation to the end of thie list
      return [...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
