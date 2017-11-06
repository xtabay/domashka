import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Product from './pages/product';
import Documentation from './pages/documentation';
import Authors from './pages/authors';
import logo from './bitcoin.svg';
import './App.css';

const panes = [
    { menuItem: 'Программа', render: () => <Tab.Pane attached={false}><Product /></Tab.Pane> },
    { menuItem: 'Документация', render: () => <Tab.Pane attached={false}><Documentation /></Tab.Pane> },
    { menuItem: 'Авторы', render: () => <Tab.Pane attached={false}><Authors /></Tab.Pane> }
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
                </header>
                <Home />
            </div>
        );
    }
}

export default App;