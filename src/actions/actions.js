import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, GET_VACANCIES_LIST, GET_VACANCIES_SUCCESS } from '../const/actionTypes';
import axios from 'axios';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function getVacanciesSuccess(response) {
    return {
        type: GET_VACANCIES_SUCCESS,
        vacancies: response.data.vacancies
    }
}

export function getVacanciesError(err) {
    return {
        type: GET_VACANCIES_SUCCESS,
        err: err
    }
}

export function getVacanciesList(limit) {
    return dispatch => {
        dispatch({ type: GET_VACANCIES_LIST })

        const request = axios({
            method: 'GET',
            url: `https://api.zp.ru/v1/vacancies?limit=${limit}`,
            headers: []
        });

        return request.then(
            response => dispatch(getVacanciesSuccess(response)),
            err => dispatch(getVacanciesError(err))
        );
    }
}

    /*return fetch(`https://api.zp.ru/v1/vacancies?limit=${limit}`, { method: 'GET' })
        .then(resp => {return resp.json()})
        .then(vacancies => ({ type: GET_VACANCIES_LIST, vacancies }))
        .catch(err => ({ type: GET_VACANCIES_LIST, err }));
    //return { type: GET_VACANCIES_LIST, list }*/
