import axios from 'axios';

const OpenAIAPI = {
    generateStory: async (apiKey, prompt) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',//'https://api.openai.com/v1/engines/text-davinci-004/completions',
                {
                    model: 'gpt-4', // Replace with your desired model
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a proffesional storyteller.',
                        },
                        {
                            role: 'user',
                            content: prompt,//'Create a story about a young guy called ROdy who embarks on a ajourney to save his dragon friend',
                        },
                    ],
                    // prompt: prompt,
                    // max_tokens: 1000,
                    // temperature: 0,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );
            console.log(response.data.choices[0].message.content);
            return response.data.choices[0].message.content;
        } catch (error) {
            throw new Error('Error generating story:', error);
        }
    },
};

export default OpenAIAPI;
