const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/stories', async (req, res) => {
    try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = response.data.slice(0, 200);
        const stories = await Promise.all(
            storyIds.map(async (id) => {
                const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                return story.data;
            })
        );
        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stories' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
