import React, { Component } from 'react'

export default class Homepage extends Component {

    render() {
        return (
            <div className="App-homepage">
                <b>Клиентское приложение для системы контроля версий Git</b> - то, что нужно новичку в использовании Git'a!<br />
                Хочешь облегчить себе жизнь и обойти стороной детальное изучение системы контроля версий?<br />
                Тебе повезло! У нас есть решение специально для тебя:<br /><a href="#">Cкачать сейчас</a>
                <br />
                <br />Нужна помощь? Найти ответ на свой вопрос <a href="#">тут</a> 
            </div>
        )
    }
}
