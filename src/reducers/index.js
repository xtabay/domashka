import { combineReducers } from 'redux';
import * as Types from '../const/actionTypes';

function getVacancies(state = [], action) {
    switch (action.type) {
        case Types.GET_VACANCIES_LIST:
            return Object.assign({}, state, {isLoading: true})
        case Types.GET_VACANCIES_SUCCESS:
            return Object.assign({}, state, {isLoading: false, vacancies: action.vacancies })
        case Types.GET_VACANCIES_ERR:
            return Object.assign({}, state, {isLoading: false, err: action.err })
        default:
            return state
    }
}

const todoApp = combineReducers({
    getVacancies
});

export default todoApp