import React, { Component } from 'react';
import GenreSelection from './GenreSelection';
import SettingSelection from './SettingSelection';
import PlotDirectionSelection from './PlotDirectionSelection';
import ThemeSelection from './ThemeSelection';
import CharacterCustomization from './CharacterCustomization';
import './CustomStory.css';
import HeaderComponent from './HeaderComponent';
import OpenAIAPI from '../OpenAIAPI';
import { Routes, Route, Link } from 'react-router-dom';

// const stories = [
//     {
//         image: 'story1.jpg',
//         title: 'Chapter 1: The Beginning',
//         content: 'Once upon a time...',
//     },
//     {
//         image: 'story2.jpg',
//         title: 'Chapter 2: The Adventure Continues',
//         content: 'In the heart of the forest...',
//     },
//     // Add more story objects here...
// ];

const stories = JSON.parse(localStorage.getItem("stories")) || [];


class CustomStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuick: '',
            selectedGenre: '',
            selectedSetting: '',
            selectedPlotDirection: '',
            selectedTheme: '',
            characterCustomization: {},
            storyPrompt: '',
            redirectToStory: null,            
        };
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre });
    };

    handleSettingSelect = (setting) => {
        this.setState({ selectedSetting: setting });
    };

    handlePlotDirectionSelect = (plotDirection) => {
        this.setState({ selectedPlotDirection: plotDirection });
    };

    handleThemeSelect = (theme) => {
        this.setState({ selectedTheme: theme });
    };

    handleCharacterCustomization = (customization) => {
        this.setState({ characterCustomization: customization });
    };

    handleGeneratePrompt = async () => {
        
        const {
            selectedGenre,
            selectedSetting,
            selectedPlotDirection,
            selectedTheme,
            characterCustomization,
        } = this.state;

        const characterInfo = Object.entries(characterCustomization)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        const storyPrompt = `
            Create a story based on the following information:

            Genre: ${selectedGenre}
            Setting: ${selectedSetting}
            Plot Direction: ${selectedPlotDirection}
            Theme: ${selectedTheme}

            and about a character with the following characteristics:
            ${characterInfo}

            Split the story in 5 pages or chapters. For each chapter, write a description of an image that is the most relevant. The image description should be appropriate for eficient use in image generation AI models.
            Split the images and the actual story by putting the image inside {} , the chapter title inside [] and the story inside <>.

            `;
        
        
            // **Plot Synopsis**

            // In a world of ${selectedSetting.toLowerCase()}, the story unfolds as ${characterCustomization['Main Character']} embarks on a journey. Guided by a sense of ${selectedPlotDirection.toLowerCase()}, they encounter challenges that test their ${characterCustomization['Personality Traits']} and lead to unexpected ${selectedTheme.toLowerCase()}. Along the way, they form a bond with ${characterCustomization['Secondary Character']}, whose ${characterCustomization['Personality Traits']} provide both ${selectedTheme.toLowerCase()} and ${selectedPlotDirection.toLowerCase()} moments.

            // Prepare for a tale of ${selectedGenre.toLowerCase()} filled with ${selectedSetting.toLowerCase()} landscapes, ${characterCustomization['Appearance']} characters, and ${selectedTheme.toLowerCase()} decisions. The story explores the depths of ${characterCustomization['Main Character']}'s bravery and the ${selectedTheme.toLowerCase()} of their journey. With ${characterCustomization['Secondary Character']} by their side, they'll face challenges that push them to the limits of ${characterCustomization['Age']} and beyond.

            // Get ready for a ${selectedPlotDirection.toLowerCase()} adventure where ${selectedTheme.toLowerCase()} is more than just a word—it's a way of life.

        this.setState({ storyPrompt });
    };

    

    render() {
        const genres = ["Fantasy", "Science Fiction", "Mystery", "Romance", "Adventure", "Historical", "Horror", "Science Fantasy", "Dystopian", "Comedy", "Superhero", "Western", "Steampunk", "Fairy Tale", "Cyberpunk", "Political Thriller", "Slice of Life"];
        const settings = ['Medieval Fantasy', 'Futuristic City', 'Victorian London', 'Space Opera'];
        const plotDirections = ["Hero's Journey", 'Twist and Turns', 'Character Development', 'Suspenseful'];
        const themes = ['Love and Sacrifice', 'Good vs. Evil', 'Identity and Self-Discovery', 'Survival'];

        let displayedTab;

        const { storyPrompt } = this.state;
        const { generatedStory } = this.state;
        // const { selectedQuick } = this.state;

        const { redirectToStory } = this.state;            
        
        // str.substring(
        //     str.indexOf(":") + 1, 
        //     str.lastIndexOf(";")


        return (
            <div className="customStory">                                                        
                <GenreSelection options={genres} onSelect={this.handleGenreSelect} />
                <SettingSelection options={settings} onSelect={this.handleSettingSelect} />
                <PlotDirectionSelection options={plotDirections} onSelect={this.handlePlotDirectionSelect} />
                <ThemeSelection options={themes} onSelect={this.handleThemeSelect} />
                <CharacterCustomization onSelect={this.handleCharacterCustomization} />

                {/* <button onClick={this.handleGeneratePrompt}>Generate Story Prompt</button>

                {storyPrompt && (
                    <div>
                        <h2>Generated Story Prompt:</h2>
                        <pre>{storyPrompt}</pre>
                    </div>
                )} */}

                <button onClick={this.handleGeneratePrompt}>Generate Story Prompt</button>
                
            </div>
        );
    }
}

export default CustomStory;






