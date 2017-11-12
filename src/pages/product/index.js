import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import { Header, Card, Grid } from 'semantic-ui-react';

import {getSalary} from "../../utils/salary";
import { getVacanciesList } from '../../actions/actions';

class ProductList extends Component  {
    componentDidMount() {
        this.props.getVacanciesList(20);
    }

    renderVacancies = vacancies => {
        if (isEmpty(vacancies)) {
            return null;
        }

        return vacancies.map(
            vacancy => {
                const link = `https://www.zarplata.ru${vacancy.url}`;
                return (
                    <Grid.Column
                        computer={4}
                        largeScreen={3}
                        mobile={16}
                        tablet={8}
                        key={vacancy.id}
                    >
                        <Card>
                            <Card.Content header={vacancy.header}/>
                            <Card.Content description={getSalary(vacancy.salary_min, vacancy.salary_max)}/>
                            <Card.Content extra>
                                <a href={link} target="_blank">Ссылка на вакансию</a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                );
            }
        );
    }

    render() {
        return (
            <div>
                <Header as="h1"> 20 последних вакансий "Программист" </Header >
                <Grid padded>
                    {this.renderVacancies(this.props.vacancy)}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vacancy: state.getVacancies.vacancies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getVacanciesList: bindActionCreators(getVacanciesList, dispatch)
    }
}

const Product = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)

export default Product
