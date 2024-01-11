// import React, { useState } from 'react';
// import './CharacterCustomization.css'; // Import your CSS file for styling

// function CharacterCustomization({ onSubmit }) {
//     const [genre, setGenre] = useState('');
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [occupation, setOccupation] = useState('');
//     const [goal, setGoal] = useState('');
//     // ... other character customization options ...

//     const handleSubmit = () => {
//         const characterData = {
//             genre,
//             name,
//             age,
//             gender,
//             occupation,
//             goal,
//             // ... other character customization options ...
//         };
//         onSubmit(characterData);
//     };

//     return (
//         <div className="character-customization">
//             <h2>Character Customization</h2>
//             <label>
//                 Genre:
//                 <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
//             </label>
//             <label>
//                 Name:
//                 <input type="text" value={name} onChange={e => setName(e.target.value)} />
//             </label>
//             <label>
//                 Age:
//                 <input type="text" value={age} onChange={e => setAge(e.target.value)} />
//             </label>
//             <label>
//                 Gender:
//                 <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
//             </label>
//             <label>
//                 Occupation:
//                 <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} />
//             </label>
//             <label>
//                 Goal:
//                 <input type="text" value={goal} onChange={e => setGoal(e.target.value)} />
//             </label>
//             {/* ... other character customization options ... */}
//             <button onClick={handleSubmit}>Generate Story</button>
//         </div>
//     );
// }

// export default CharacterCustomization;

import React, { Component } from 'react';
import './CharacterCustomization.css'; // Import your CSS file for styling

class CharacterCustomization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            characterGender: '',
            characterAge: '',
            characterAppearance: '',
            characterPersonality: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            this.props.onSelect(this.state); // Notify parent component about changes
        });
    };

    render() {
        const {
            characterName,
            characterGender,
            characterAge,
            characterAppearance,
            characterPersonality,
        } = this.state;

        return (
            <div>
                <h2>Character Customization</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="characterName"
                        value={characterName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select name="characterGender" value={characterGender} onChange={this.handleInputChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="text"
                        name="characterAge"
                        value={characterAge}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Appearance:
                    <textarea
                        name="characterAppearance"
                        value={characterAppearance}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Personality Traits:
                    <textarea
                        name="characterPersonality"
                        value={characterPersonality}
                        onChange={this.handleInputChange}
                    />
                </label>
            </div>
        );
    }
}

export default CharacterCustomization;
