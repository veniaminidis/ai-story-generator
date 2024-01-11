import React, { Component } from 'react';

class PlotDirectionSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            customValue: '',
        };
    }

    handleSelect = (e) => {
        const selectedOption = e.target.value;
        this.setState({ selectedOption });
        if (selectedOption !== 'custom' && selectedOption !== 'random') {
            this.props.onSelect(selectedOption);
        } else if (selectedOption === 'random') {
            const randomOption = this.props.options[Math.floor(Math.random() * this.props.options.length)];
            this.props.onSelect(randomOption);
        }
    };

    handleCustomInputChange = (e) => {
        this.setState({ customValue: e.target.value });
    };

    handleCustomSubmit = () => {
        const { customValue } = this.state;
        if (customValue.trim() !== '') {
            this.props.onSelect(customValue);
        }
    };

    render() {
        const { options } = this.props;
        const { selectedOption, customValue } = this.state;

        return (
            <div>
                <p>Plot direction: </p>
                <select value={selectedOption} onChange={this.handleSelect}>
                    <option value="">Select</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                    <option value="random">Random</option>
                    <option value="custom">Custom</option>
                </select>
                {selectedOption === 'custom' && (
                    <div>
                        <input
                            type="text"
                            value={customValue}
                            onChange={this.handleCustomInputChange}
                            placeholder="Enter custom option"
                        />
                        <button onClick={this.handleCustomSubmit}>Submit</button>
                    </div>
                )}
            </div>
        );
    }
}

export default PlotDirectionSelection;
