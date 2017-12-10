import React from 'react';
import { Item } from 'semantic-ui-react';

import Anton from './img/Antn.PNG';
import Anya from './img/Anya.PNG';
import Ira from './img/Ira.PNG';
import Jenya from './img/Jenya.PNG';
import Yana from './img/Yana.PNG';

const authors = [
    {
        name: 'Башарин Антон',
        description:
            {__html:'JavaScript-разработчик. Занимается разработкой данного <a href="https://x-tabay.firebaseapp.com/">сайта</a> с целью продвижения программного обеспечения на рынке'},
        photo: Anton,
        url: 'https://vk.com/garugaru',
        mail: 'bav.nsk@mail.ru'
    },
    {
        name: 'Питаева Ирина (Scrum Master\u265A)',
        description:
            {__html:'Технический писатель. Занимается описыванием технических особенностей проекта.'},
        photo: Ira,
        url: 'https://vk.com/id57345322',
        mail: 'pitaeva.irina@gmail.com '
    },
    {
        name: 'Цыбина Яна (Product Owner\u265B)',
        description:
            {__html:'Аналитик. Занимается анализом пользовательских историй, на основании которых формируются требования к разработчикам.'},
        photo: Yana,
        url: 'https://vk.com/id222224483',
        mail: 'janatsybina@yandex.ru'
    },
    {
        name: 'Зворыгина Анна',
        description:
            {__html: 'Тестировщик проекта. Занимается юнит-тестированием (unit testing) модулей разрабатываемого проекта.'},
        photo: Anya,
        url: 'https://vk.com/sherlen',
        mail: 'anna36zv@gmail.com'
    },
    {
        name: 'Пестряков Евгений',
        description:
            {__html: 'Разработчик. Занимается созданием программного обеспечения (клиентское приложение) для взаимодействие с системой контроля версий Git через терминал.'},
        photo: Jenya,
        url: 'https://vk.com/e.e_95',
        mail: 'utren_95@mail.ru'
    }
];

const renderAuthors = () => (
    authors.map(author => (
        <Item key={author.name}>
            <Item.Image size='small' src={author.photo} />
            <Item.Content>
                <Item.Header>
                    <a className="link" href={author.url} target="_blank">
                        {author.name}
                        </a>
                </Item.Header>
                <Item.Description>
                    <div dangerouslySetInnerHTML={author.description} />
                </Item.Description>
                <Item.Extra>
                    {author.mail}
                </Item.Extra>
            </Item.Content>
        </Item>
    ))
);

export default () => (
    <Item.Group>
        {renderAuthors()}
    </Item.Group>
);
