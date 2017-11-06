import { combineReducers } from 'redux';
import {
    ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, GET_VACANCIES_LIST,
    GET_VACANCIES_SUCCESS, GET_VACANCIES_ERR
} from '../const/actionTypes';
import { VisibilityFilters } from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function getVacancies(state = [], action) {
    switch (action.type) {
        case GET_VACANCIES_LIST:
            return Object.assign({}, state, {isLoading: true})
        case GET_VACANCIES_SUCCESS:
            return Object.assign({}, state, {isLoading: false, vacancies: action.vacancies })
        case GET_VACANCIES_ERR:
            return Object.assign({}, state, {isLoading: false, err: action.err })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    getVacancies
});

export default todoApp