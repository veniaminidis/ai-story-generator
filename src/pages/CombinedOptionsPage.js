// import React, { useState } from 'react';
// import GenreSelection from '../components/StoryOptions/GenreSelection';
// import CharacterCustomization from '../components/StoryOptions/CharacterCustomization';
// import SettingChoices from '../components/StoryOptions/SettingChoices';
import './CombinedOptionsPage.css';
import  { Navigate } from 'react-router-dom'

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
const size = Object.keys(stories).length;


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
            const { selectedQuick } = this.state;
            // const storyPrompt = this.state.selectedQuick;
            storyPrompt = `
            Create a kids story about ${selectedQuick}.

            Split the story in 5 pages or chapters. For each chapter, write a description of an image that is the most relevant. The image description should be appropriate for eficient use in image generation AI models.
            Split the images and the actual story by putting the image inside {} , the chapter title inside [] and the story inside <> and after avery chapter put a *.

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
                Split the images and the actual story by putting the image inside {} , the chapter title inside [] and the story inside <> and after avery chapter put a *.
    
                `;
        }

        // **Plot Synopsis**

        // In a world of ${selectedSetting.toLowerCase()}, the story unfolds as ${characterCustomization['Main Character']} embarks on a journey. Guided by a sense of ${selectedPlotDirection.toLowerCase()}, they encounter challenges that test their ${characterCustomization['Personality Traits']} and lead to unexpected ${selectedTheme.toLowerCase()}. Along the way, they form a bond with ${characterCustomization['Secondary Character']}, whose ${characterCustomization['Personality Traits']} provide both ${selectedTheme.toLowerCase()} and ${selectedPlotDirection.toLowerCase()} moments.

        // Prepare for a tale of ${selectedGenre.toLowerCase()} filled with ${selectedSetting.toLowerCase()} landscapes, ${characterCustomization['Appearance']} characters, and ${selectedTheme.toLowerCase()} decisions. The story explores the depths of ${characterCustomization['Main Character']}'s bravery and the ${selectedTheme.toLowerCase()} of their journey. With ${characterCustomization['Secondary Character']} by their side, they'll face challenges that push them to the limits of ${characterCustomization['Age']} and beyond.

        // Get ready for a ${selectedPlotDirection.toLowerCase()} adventure where ${selectedTheme.toLowerCase()} is more than just a word—it's a way of life.

        this.setState({ storyPrompt });

        const apiKey = process.env.REACT_APP_API_KEY; // Replace with your actual API key
        const prompt = storyPrompt;//'Give me 3 words inside {}, [] and <> respectively'//storyPrompt//'Create a story about a young guy called ROdy who embarks on a ajourney to save his dragon friend'; // Use the generated story prompt

        console.log(prompt);
        console.log(apiKey);
        // try {
        // const generatedStory  = `[Chapter 1: A Colorful Underwater Home]

        // {Image: An underwater scene showing a myriad of vibrant, colorful corals, seaweeds, and other marine life. In the center, a small orange fish with big blue eyes and a smiling face is waving its tiny fins in greeting. Various creatures, like a turtle, an octopus, and a seahorse are playfully swimming around. Sunlight pierces through the clear blue water, casting magical rays all around.}
        
        // < In the heart of the blue ocean, amidst clusters of corals and dense seaweeds, lived a happy little fish named Finley. He had big, curious blue eyes, an orange glossy scale that sparkled under the sun, and an infectious smile. Finley loved his beautiful, colorful underwater home and made friends with everyone, from the slow-moving turtle to the playful seahorse. >
        
        // *[Chapter 2: The Forgotten Cave]
        
        // {Image: A mysterious underwater cave obscured by dark shadows. It's entrance gaping wide open, into what seems like an endless black tunnel. Intricate stalactites hanging down from the roof create an air of mystery. Finley is hesitantly hovering near the entrance, his eyes wide with both excitement and fear.}
        
        // < One day, during a game of hide and seek, Finley stumbled upon a forgotten cave. It was a deep, dark tunnel that looked quite scary. But Finley, being the adventurous fish he was, decided to swim in and explore, his tiny heart throbbing with both fear and thrill. >
        
        // *[Chapter 3: The Magical Pearl]
        
        // {Image: An enormous, glowing pearl placed atop a golden pedestal in the middle of the cave. The pearl is emitting a warm, soft glow, illuminating the surrounding area. It's reflection bouncing off Finley’s wide, astonished eyes. He is approaching it cautiously, his mouth slightly open in wonder.}
        
        // < As Finley swam deeper into the cave, his blue eyes landed on something magnificent. It was a magical, glowing pearl. The pearl was huge and it shone so bright that it lit up the entire cave. Finley was amazed and couldn't help but approach this mysterious, beautiful object. >
        
        // *[Chapter 4: The Pearl's Mighty Power]
        
        // {Image: Bright beams of light exploding out of the pearl, spreading an array of mesmerizing colors across the cave. Shocked, Finley hides behind a stalagmite, his eyes peering from behind it. The seabed around the pedestal is starting to bloom with colorful exotic flowers and plants.}
        
        // < The second Finley touched the pearl, it began to pulsate, emitting bright beams of light. Scared yet fascinated, Finley hid behind a stalagmite to watch. As if responding to the pearl's power, the cold barren seabed around the pedestal began to blossom with the most beautiful, colorful exotic flowers Finley had ever seen. >
        
        // *[Chapter 5: The Blooming Ocean]
        
        // {Image: An overflowing, extravagant feast of vividly colored coral formations, exotic aquatic plants, and happy marine animals swimming amidst them. Finley, with the glowing pearl gently held in his fins, emerges from the cave existence, his eyes sparkling as he watches the miraculous transformation. Behind him, the whole underwater world is now blooming.}
        
        // < When Finley brought the magical pearl out of the cave, the whole ocean began to come alive. The corals seemed more vibrant, the flowers bloomed bigger, the seaweeds swayed happier. And amidst all this, the little smiling fish, Finley, felt immense joy. From that day onwards, Finley's life became more enchanting, filled with adventures and color; every day was a new magical journey. Thus, our little fish found the true magic of brave exploration in the heart of the blue ocean.>`
        try {
            const generatedStory = await OpenAIAPI.generateStory(apiKey, prompt);
            this.setState({ generatedStory });
            this.handleStorySplit(generatedStory);
            // console.log(size);
            this.handleRedirect(size);

        } catch (error) {
            console.error('Error generating story:', error);
        }
    };

    handleStoryStorage = (generatedStory) => {
        const stories = JSON.parse(localStorage.getItem("stories")) || [];
        stories.push(generatedStory);
        localStorage.setItem("stories", JSON.stringify(stories));
    }

    handleStorySplit = (generatedStory) => {
        const chapters = generatedStory.split('*');
        let story = {};
        // console.log(chapters);

        chapters.forEach((chapter, index) => {
            

            const titleMatch = chapter.match(/\[(.*?)\]/);
            const contentMatch = chapter.match(/<(.*?)>/);

            story[index] = {
                image: 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc',    
                title: titleMatch ? titleMatch[1] : '',
                content: contentMatch ? contentMatch[1] : '',
            };

            // story.index.title = titleMatch ? titleMatch[1] : '';
            // story.index.content = contentMatch ? contentMatch[1] : '';

            // this.handleStoryStorage(story);
            // console.log(`Chapter ${index + 1}:`, story);
        });
        this.handleStoryStorage(story);
        // console.log(story);
    }


    handleRedirect = (storyId) => {
        this.setState({ redirectToStory: storyId });
        console.log('redir' + storyId);
        // Redirect to the story page with the corresponding storyId
        // const navigate = useNavigate();
        // navigate.push(`/story/${storyId}`); // Assuming '/story/:storyId' is the route for story pages
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
        const { optionsTab } = this.state;

        // str.substring(
        //     str.indexOf(":") + 1, 
        //     str.lastIndexOf(";")
        if (optionsTab === "1") {
            displayedTab = <QuickStory onSelect={this.handleQuickSelect} />;
        }
        else if (optionsTab === "2") {
            displayedTab = <CustomStory />//<SettingSelection options={settings} onSelect={this.handleSettingSelect} />
        }


        return (
            <div className="options">

                <h1 className="opTitle">Story Options</h1>
                {/* <p>{this.state.selectedQuick}</p> */}
                <HeaderComponent parentCallback={this.handleCallback} />
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
                {generatedStory && (
                    <Navigate to={"/story/" + (size)}  />
                )
                }
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






