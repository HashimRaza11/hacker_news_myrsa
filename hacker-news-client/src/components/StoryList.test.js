import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StoryList from './StoryList';

describe('StoryList', () => {
    const mockStories = [
        { id: 1, title: 'Story 1', url: 'http://example.com/1', by: 'Author 1' },
        { id: 2, title: 'Story 2', url: 'http://example.com/2', by: 'Author 2' },
        { id: 3, title: 'Story 3', url: '', by: 'Author 3' }, // No link available
    ];

    test('renders stories correctly', () => {
        render(<StoryList stories={mockStories} />);

        // Check if stories are displayed
        expect(screen.getByText('Story 1')).toBeInTheDocument();
        expect(screen.getByText('Story 2')).toBeInTheDocument();
        expect(screen.getByText('Story 3 (No Link Available)')).toBeInTheDocument();
    });

    test('shows message when no stories are available', () => {
        render(<StoryList stories={[]} />);
        expect(screen.getByText('No stories available.')).toBeInTheDocument();
    });
});
