import React, { useState } from 'react';

const StoryList = ({ stories }) => {
    const [visitedLinks, setVisitedLinks] = useState(new Set());

    const handleLinkClick = (url) => {
        setVisitedLinks((prevVisited) => new Set(prevVisited).add(url));
    };

    if (stories.length === 0) {
        return <p>No stories available.</p>; // Message for no stories
    }

    return (
        <ul className="list-none">
            {stories.map(story => (
                <li key={story.id} className="mb-4 p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">
                        {story.url ? (
                            <a 
                                href={story.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`text-blue-500 hover:underline ${
                                    visitedLinks.has(story.url) ? 'text-green-500' : ''
                                }`} // Change color if visited
                                onClick={() => handleLinkClick(story.url)} // Track visited link
                            >
                                {story.title}
                            </a>
                        ) : (
                            <span className="text-gray-500">{story.title} (No Link Available)</span>
                        )}
                    </h2>
                    <p className="text-gray-600">{story.by}</p>
                </li>
            ))}
        </ul>
    );
};

export default StoryList;
