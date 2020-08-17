import React, { Component } from 'react'

export class ComponenteControlado extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' };
        this.Cambios = this.Cambios.bind(this);
    }

    Cambios(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <form >
                    <label>
                        Name:
                    <input type="text" value={this.state.value} onChange={this.Cambios} />
                    </label>
                    <p>{this.state.value}</p>
                </form>
            </div>
        )
    }
}

export default ComponenteControlado
