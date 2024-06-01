import React, { Component } from 'react'

export default class UseRefWithClass3 extends Component {
    constructor() {
        super();
        this.inptRef = React.createRef();
    }
    handleButton = () => {
        this.inptRef.current.style.color = "blue";
        this.inptRef.current.readOnly = !this.inptRef.current.readOnly;
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inptRef} placeholder='Enter Name....' />
                <button onClick={this.handleButton}>Click</button>
            </div>
        )
    }
}
