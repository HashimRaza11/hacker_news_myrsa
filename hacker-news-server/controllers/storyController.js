const fetchStories = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 20; 
    const startIndex = (page - 1) * limit; 

    try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
        const storyIds = response.data.slice(startIndex, startIndex + limit); 
        
        const stories = await Promise.all(storyIds.map(async (id) => {
            const storyResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
            return storyResponse.data;
        }));

        res.json(stories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stories' });
    }
};
