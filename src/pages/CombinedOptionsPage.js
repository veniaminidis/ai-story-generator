// import React, { useState } from 'react';
// import GenreSelection from '../components/StoryOptions/GenreSelection';
// import CharacterCustomization from '../components/StoryOptions/CharacterCustomization';
// import SettingChoices from '../components/StoryOptions/SettingChoices';
import './CombinedOptionsPage.css';

// function CombinedOptionsPage({ onGenerateStory }) {
//     const [selectedGenre, setSelectedGenre] = useState('');
//     const [characterData, setCharacterData] = useState({});
//     const [selectedSetting, setSelectedSetting] = useState('');
//     // ... other option states ...

//     const handleGenerateStory = () => {
//         const storyOptions = {
//             genre: selectedGenre,
//             characters: characterData,
//             setting: selectedSetting,
//             // ... other option data ...
//         };
//         onGenerateStory(storyOptions);
//     };
//     const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Adventure'];

//     return (
//         <div>
//             <h1>Story Options</h1>
//             <GenreSelection options={genres} onSelectGenre={setSelectedGenre} />
//             <CharacterCustomization onSubmitCharacter={setCharacterData} />
//             <SettingChoices onSelectSetting={setSelectedSetting} />
//             {/* Other option components */}
//             {/* Submit button to generate story */}
//             <button onClick={handleGenerateStory}>Generate Story</button>
//         </div>
//     );
// }

// export default CombinedOptionsPage;

import React, { Component } from 'react';
import GenreSelection from '../components/StoryOptions/GenreSelection';
import SettingSelection from '../components/StoryOptions/SettingSelection';
import PlotDirectionSelection from '../components/StoryOptions/PlotDirectionSelection';
import ThemeSelection from '../components/StoryOptions/ThemeSelection';
import CharacterCustomization from '../components/StoryOptions/CharacterCustomization';
import HeaderComponent from '../components/StoryOptions/HeaderComponent';
import QuickStory from '../components/StoryOptions/QuickStory';
import OpenAIAPI from '../components/OpenAIAPI';
import Story from './Story';
import CustomStory from '../components/StoryOptions/CustomStory';
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


class CombinedOptionsPage extends Component {
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
            optionsTab: '1'
        };
    }
    
    handleQuickSelect = (quickSelection) => {
        this.setState({ selectedQuick: quickSelection }, () => {
            // This callback is invoked after the state has been updated
            // console.log(this.state.selectedQuick);
            this.handleGeneratePrompt('1');
        });
    };

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

    handleGeneratePrompt = async (tab) => {

        let storyPrompt;

        // const {
        //     selectedGenre,
        //     selectedSetting,
        //     selectedPlotDirection,
        //     selectedTheme,
        //     characterCustomization,
        //     selectedQuick,
        // } = this.state;        

        if (tab === '1') {
            const {selectedQuick} = this.state;
            // const storyPrompt = this.state.selectedQuick;
            storyPrompt = `
            Create a kids story about ${selectedQuick}.

            Split the story in 5 pages or chapters. For each chapter, write a description of an image that is the most relevant. The image description should be appropriate for eficient use in image generation AI models.
            Split the images and the actual story by putting the image inside {} , the chapter title inside [] and the story inside <>.

            `;
        }
        else if (tab === '2') {
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
    
            storyPrompt = `
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
        }
        
            // **Plot Synopsis**

            // In a world of ${selectedSetting.toLowerCase()}, the story unfolds as ${characterCustomization['Main Character']} embarks on a journey. Guided by a sense of ${selectedPlotDirection.toLowerCase()}, they encounter challenges that test their ${characterCustomization['Personality Traits']} and lead to unexpected ${selectedTheme.toLowerCase()}. Along the way, they form a bond with ${characterCustomization['Secondary Character']}, whose ${characterCustomization['Personality Traits']} provide both ${selectedTheme.toLowerCase()} and ${selectedPlotDirection.toLowerCase()} moments.

            // Prepare for a tale of ${selectedGenre.toLowerCase()} filled with ${selectedSetting.toLowerCase()} landscapes, ${characterCustomization['Appearance']} characters, and ${selectedTheme.toLowerCase()} decisions. The story explores the depths of ${characterCustomization['Main Character']}'s bravery and the ${selectedTheme.toLowerCase()} of their journey. With ${characterCustomization['Secondary Character']} by their side, they'll face challenges that push them to the limits of ${characterCustomization['Age']} and beyond.

            // Get ready for a ${selectedPlotDirection.toLowerCase()} adventure where ${selectedTheme.toLowerCase()} is more than just a word—it's a way of life.

        this.setState({ storyPrompt });

        const apiKey = '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'; // Replace with your actual API key
        const prompt = storyPrompt;//'Give me 3 words inside {}, [] and <> respectively'//storyPrompt//'Create a story about a young guy called ROdy who embarks on a ajourney to save his dragon friend'; // Use the generated story prompt

        console.log(prompt);
        // try {
        //     const generatedStory = await OpenAIAPI.generateStory(apiKey, prompt);
        //     this.setState({ generatedStory });
        //     this.handleStorySplit(generatedStory);
            
        // } catch (error) {
        //     console.error('Error generating story:', error);
        // }
    };

    handleStoryStorage = (generatedStory) => {        
        stories.push(generatedStory);
        console.log(stories);
        localStorage.setItem("stories", JSON.stringify(stories));
    }

    handleStorySplit = (generatedStory) => {
        //PROHGOUMENO DEN DOULEVE KALA TO SPLIT
        // const story = {
        //     // {
        //     //     image: 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc',
        //     //     // title: '',
        //     //     // content: '',
        //     // }
        // };
        // // story.image = 
        // // generatedStory.substring(
        // //     generatedStory.indexOf("{") + 1, 
        // //     generatedStory.lastIndexOf("}"));  
        // story.title = 
        // generatedStory.substring(
        //     generatedStory.indexOf("[") + 1, 
        //     generatedStory.lastIndexOf("]"));
        // story.content = 
        // generatedStory.substring(
        //     generatedStory.indexOf("<") + 1, 
        //     generatedStory.lastIndexOf(">"));      
        // story.image = 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc'
        // this.handleStoryStorage(story);
        // console.log(story);

        const story = {
            image: 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc',
        };
    
        const titleMatch = generatedStory.match(/\[(.*?)\]/);
        const contentMatch = generatedStory.match(/<(.*?)>/);
    
        story.title = titleMatch ? titleMatch[1] : '';
        story.content = contentMatch ? contentMatch[1] : '';
    
        this.handleStoryStorage(story);
        console.log(story);
    }

    handleRedirect = (storyId) => {
        this.setState({ redirectToStory: storyId });
        console.log('redir');
    };

    handleCallback = (childData) => {
        this.setState({ optionsTab: childData })
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
        const {optionsTab} = this.state; 
        
        // str.substring(
        //     str.indexOf(":") + 1, 
        //     str.lastIndexOf(";")
        if (optionsTab === "1") {
            displayedTab = <QuickStory onSelect={this.handleQuickSelect}/>;
        }
        else if (optionsTab === "2") {
            displayedTab = <CustomStory />//<SettingSelection options={settings} onSelect={this.handleSettingSelect} />
        }


        return (
            <div className="options">

                <h1 className="opTitle">Story Options</h1>
                {/* <p>{this.state.selectedQuick}</p> */}
                <HeaderComponent parentCallback={this.handleCallback}/>
                {displayedTab}
                {/* <GenreSelection options={genres} onSelect={this.handleGenreSelect} />
                <SettingSelection options={settings} onSelect={this.handleSettingSelect} />
                <PlotDirectionSelection options={plotDirections} onSelect={this.handlePlotDirectionSelect} />
                <ThemeSelection options={themes} onSelect={this.handleThemeSelect} />
                <CharacterCustomization onSelect={this.handleCharacterCustomization} /> */}

                {/* <button onClick={this.handleGeneratePrompt}>Generate Story Prompt</button>

                {storyPrompt && (
                    <div>
                        <h2>Generated Story Prompt:</h2>
                        <pre>{storyPrompt}</pre>
                    </div>
                )} */}

                {/* <button onClick={this.handleGeneratePrompt}>Generate Story Prompt</button> */}
                {/* {generatedStory && (
                    <div>
                        <h2>Generated Story:</h2>
                        <pre>{generatedStory}</pre>
                        <Link
                            to= {"/home/story/" + (stories.length - 1)}
                            state={{
                                storyIndex: "1"//stories.length - 1 // Index of the newly generated story
                            }}
                        >
                            Go to Story Page
                        </Link>
                    </div>
                )} */}
                
            </div>
        );
    }
}

export default CombinedOptionsPage;






