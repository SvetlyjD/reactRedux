import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: 1
        }
    }

    render() {
        return (
            < div >
                <div><a href="/">На главную</a></div>
                <div><a href="/slider">Слайдер</a></div>
            </div >
        )
    }
}