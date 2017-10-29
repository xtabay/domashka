import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Authors from './pages/authors';
import AccordionExampleStyled from './pages/documentation';
import logo from './bitcoin.svg';
import './App.css';

const panes = [
    { menuItem: 'Программа', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Документация', render: () => <Tab.Pane attached={false}><AccordionExampleStyled /></Tab.Pane> },
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