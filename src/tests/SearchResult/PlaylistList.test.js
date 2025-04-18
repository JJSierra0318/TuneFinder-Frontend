import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlaylistList from '../../components/SearchResult/PlaylistList';

jest.mock('../../images/User.png', () => 'User.png');

describe('PlaylistList', () => {
    const mockPlaylists = [
        {
          id: '1',
          name: 'Test Playlist',
          images: [{ url: 'https://example.com/image.jpg' }],
          external_urls: {
            spotify: 'https://example.com/spotify/1'
          },
          tracks: {
            total: 5,
          },
          owner:
            { display_name: 'Name One' },
        },
        {
          id: '2',
          name: 'Playlist Without Image',
          images: [],
          external_urls: {
            spotify: 'https://example.com/spotify/2'
          },
          tracks: {
            total: 5,
          },
          owner:
            { display_name: 'Name Two' },
        },
      ];

  test('renders playlist information including name, track numbers and owner name', () => {
    render(<PlaylistList playlists={mockPlaylists} />);

    expect(screen.getByText('Test Playlist')).toBeInTheDocument();
    expect(screen.getByText('Playlist Without Image')).toBeInTheDocument();

    expect(screen.getByText((content) => content.includes('Name One'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Name Two'))).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://example.com/spotify/1');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/spotify/2');

    const playlistImages = screen.getAllByAltText('playlist logo');
    expect(playlistImages[0].src).toBe('https://example.com/image.jpg');
    expect(playlistImages[1].src).toContain('User.png');

    const fallbackImage = screen.getAllByAltText('playlist logo')[1];
    expect(fallbackImage.src).toContain('User.png');
  });
});