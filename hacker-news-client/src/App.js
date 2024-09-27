import React, { useEffect, useState } from 'react';
import StoryList from './components/StoryList';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { fetchStories } from './services/api';

function App() {
    const [stories, setStories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const storiesPerPage = 10;

    useEffect(() => {
        const loadStories = async () => {
            const fetchedStories = await fetchStories();
            setStories(fetchedStories);
        };
        loadStories();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to the first page on new search
    };

    // Filter stories based on search query
    const filteredStories = stories.filter(story => 
        story.title && story.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Hacker News Stories</h1>
            <Search onSearch={handleSearch} />
            <StoryList stories={currentStories} />
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default App;
