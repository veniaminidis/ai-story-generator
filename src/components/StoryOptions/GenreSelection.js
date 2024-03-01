// import React, { useState } from 'react';
// import './Options.css';

// function GenreSelection({ onSelectGenre }) {
//     const [selectedGenre, setSelectedGenre] = useState('');

//     const handleGenreChange = (e) => {
//         setSelectedGenre(e.target.value);
//     };

//     const handleGenreSubmit = () => {
//         onSelectGenre(selectedGenre);
//     };

//     return (
//         <div>
//             <h2>Genre Selection</h2>
//             <label>
//                 Select Genre:
//                 <select value={selectedGenre} onChange={handleGenreChange}>
//                     <option value="">Select</option>
//                     <option value="fantasy">Fantasy</option>
//                     <option value="science fiction">Science Fiction</option>
//                     <option value="mystery">Mystery</option>
//                     <option value="romance">Romance</option>
//                     <option value="adventure">Adventure</option>
//                     <option value="comedy">Comedy</option>
//                     <option value="action">Action</option>
//                     <option value="mythology">Mythology</option>
//                     <option value="fairy tale">Fairy Tale</option>
//                     <option value="super hero">Super hero</option>
//                     {/* Add more genres */}
//                 </select>
//             </label>
//             {/* <button onClick={handleGenreSubmit}>Next</button> */}
//         </div>
//     );
// }

// export default GenreSelection;

import React, { Component } from 'react';
import './CustomStory.css';

class GenreSelection extends Component {
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
        if (selectedOption !== 'custom') {
            this.props.onSelect(selectedOption);
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
            <div className="optionComponent">
                <p className="optionTitle">Genre: </p>
                <select className="optionDropdown" value={selectedOption} onChange={this.handleSelect}>
                    <option value="">Select</option>
                    {options.map((option) => (
                        <option className="optionItem" key={option} value={option}>
                            {option}
                        </option>
                    ))}
                    <option className="optionItem" value="custom">Custom</option>
                </select>
                {selectedOption === 'custom' && (
                    <div>
                        <input className="optionCustom"
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

export default GenreSelection;
