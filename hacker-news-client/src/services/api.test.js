import { fetchStories } from './api';
import axios from 'axios';

jest.mock('axios');

describe('API calls', () => {
    test('fetches stories successfully', async () => {
        const stories = [{ id: 1, title: 'Story 1', url: 'http://example.com/1', by: 'Author 1' }];
        axios.get.mockResolvedValue({ data: stories });

        const result = await fetchStories(axios);
        expect(result).toEqual(stories);
    });

    test('handles error when fetching stories', async () => {
        axios.get.mockRejectedValue(new Error('Network error'));

        const result = await fetchStories(axios);
        expect(result).toEqual([]); // Should return an empty array when there's an error
    });
});
