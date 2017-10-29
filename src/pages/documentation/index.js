import React, { Component } from 'react'
import { Accordion, Icon, Header } from 'semantic-ui-react'

import { FAQ } from './../../const';

export default class AccordionExampleStyled extends Component {
    constructor() {
        super();

        this.state = { activeIndex: -1 };
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        console.log(FAQ);
        this.setState({ activeIndex: newIndex })
    };

    renderAccordion = (aIndex) => {
        return FAQ.map((answ) => (
            <div key={answ.id}>
                <Accordion.Title active={aIndex === answ.id} index={answ.id} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    {answ.title}
                </Accordion.Title>
                <Accordion.Content active={aIndex === answ.id}>
                    <p>
                        {answ.description}
                    </p>
                </Accordion.Content>
            </div>
        ))
    };

    render() {
        const { activeIndex } = this.state;

        return (
            <div>
                <Header className="centered" as='h2'>Документация для ProgrammName</Header>
                <Accordion fluid styled>
                    {this.renderAccordion(activeIndex)}
                </Accordion>
            </div>
        )
    }
}
