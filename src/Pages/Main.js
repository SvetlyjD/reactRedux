import React from 'react';



export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: 1
        }
    }

    render() {
        return (
            < div >
                Main
            </div >
        )
    }
}