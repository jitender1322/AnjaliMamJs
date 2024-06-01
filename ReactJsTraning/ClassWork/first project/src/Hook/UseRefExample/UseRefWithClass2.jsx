import React, { Component } from 'react'

export default class UseRefWithClass2 extends Component {
    constructor() {
        super();
        this.nameField = React.createRef();
        this.state = {
            name: ""
        }
    }
    handleButton = () => {
        if (this.nameField.current.value.length < 4) {
            alert("required 4 or more charcter")
        } else {
            console.log("all okk");
            this.setState({ name: this.nameField.current.value })
        }
    }
    render() {
        return (
            <div>
                {this.name}
                <input type="text" ref={this.nameField} placeholder='Enter Name....' />
                <button onClick={this.handleButton}>Click</button>
            </div>
        )
    }
}
