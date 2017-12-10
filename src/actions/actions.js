import {  GET_VACANCIES_LIST, GET_VACANCIES_SUCCESS, GET_VACANCIES_ERR } from '../const/actionTypes';
import axios from 'axios';

export function getVacanciesSuccess(response) {
    return {
        type: GET_VACANCIES_SUCCESS,
        vacancies: response.data.vacancies
    }
}

export function getVacanciesError(err) {
    return {
        type: GET_VACANCIES_ERR,
        err: err
    }
}

export function getVacanciesList(limit) {
    return dispatch => {
        dispatch({ type: GET_VACANCIES_LIST })

        const request = axios({
            method: 'GET',
            url: `https://api.zp.ru/v1/vacancies?limit=${limit}&q=Программист`,
            headers: []
        });

        return request.then(
            response => dispatch(getVacanciesSuccess(response)),
            err => dispatch(getVacanciesError(err))
        );
    }
}
