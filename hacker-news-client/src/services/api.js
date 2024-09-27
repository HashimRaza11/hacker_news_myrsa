import axios from 'axios';
const API_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

export const fetchStories = async () => {
    try {
        const response = await axios.get(API_URL);
        const storyIds = response.data.slice(0, 200); // Get only the first 200 story IDs
        const stories = await Promise.all(storyIds.map(async (id) => {
            const storyResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return storyResponse.data;
        }));
        return stories.filter(story => story !== null); // Filter out any null stories
    } catch (error) {
        console.error("Error fetching stories:", error);
        return [];
    }
};
