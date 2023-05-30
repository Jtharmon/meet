import React, { Component } from "react";

class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            query: 32,
            errorText: "",
        };
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value >= 1 || value <= 32) {
            this.setState({
                query: value,
                errorText: "",
            });
        }
        if (value < 1 || value > 32) {
            this.setState({
                query: value,
                errorText: "Please enter a valid number",
            });
        }
    };

    render() {
        return (
            <div className='NumberOfEvents'>
                <input className='number-of-events-input'
                    type='number'
                    min={1}
                    max={32}
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;