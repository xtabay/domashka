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
        description: 'JavaScript разработчик, занимается разработкой сайта для продвижения.',
        photo: Anton,
        url: 'https://vk.com/garugaru'
    },
    {
        name: 'Питаева Ирина',
        description: 'Технический писатель, описывает технические особенности проекта. Scrum Master\u265A',
        photo: Ira,
        url: 'https://vk.com/id57345322'
    },
    {
        name: 'Цыбина Яна',
        description: 'Аналитик. Анализирует пользовательские истории, на основании которых формирует требования к разработчикам. Product Owner\u265B',
        photo: Yana,
        url: 'https://vk.com/id222224483'
    },
    {
        name: 'Зворыгина Анна',
        description: 'Тестировщик проекта. Занимается юнит тестирование модулей проекта.',
        photo: Anya,
        url: 'https://vk.com/sherlen'
    },
    {
        name: 'Пестряков Евгений',
        description: 'Разработчик. Создатель программы для взаимодействие с системой контроля версий git через терминал.',
        photo: Jenya,
        url: 'https://vk.com/e.e_95'
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
                    <p>{author.description}</p>
                </Item.Description>
            </Item.Content>
        </Item>
    ))
);

const ItemExampleDescriptions = () => (
    <Item.Group>
        {renderAuthors()}
    </Item.Group>
);

export default ItemExampleDescriptions;