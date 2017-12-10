import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Homepage from './pages/homepage';
import Product from './pages/product';
import Documentation from './pages/documentation';
import Authors from './pages/authors';
import logo from './bitcoin.svg';
import './App.css';

const panes = [
    { menuItem: 'Главная', render: () => <Tab.Pane attached={false}><Homepage /></Tab.Pane> },
    { menuItem: 'FAQ', render: () => <Tab.Pane attached={false}><Documentation /></Tab.Pane> },
    { menuItem: 'Команда разработчиков', render: () => <Tab.Pane attached={false}><Authors /></Tab.Pane> },
    { menuItem: 'Вакансии', render: () => <Tab.Pane attached={false}><Product /></Tab.Pane> }
];

const Home = (props) => (
    <Tab className="tabs-menu tabs-container" menu={{ attached: false }} panes={panes} />
);

class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Клиентское приложение<br />для системы контроля версий Git</h1>
                </header>
                <Home />
            </div>
        );
    }
}

export default App;