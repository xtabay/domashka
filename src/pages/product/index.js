import React, { Component } from 'react';
import { store } from '../../store';
import { getVacanciesList } from '../../actions/actions';

console.log(store.getState());
/*const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);*/

export  default  class Product extends Component {
    render() {
        return (
            <div>
                <span>bla bla bla</span>
            </div>
        )
    }
}


store
    .dispatch(getVacanciesList(100))
    .then(() => console.log(store.getState()));