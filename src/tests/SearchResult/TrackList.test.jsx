import React from 'react';
import { render, screen } from '@testing-library/react';
import TrackList from '../../components/SearchResult/TrackList';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>, // Reemplaza el BrowserRouter con un div normal
  Link: ({ children }) => <span>{children}</span>, // Si también usas Link, puedes mockearlo así
}));

jest.mock('../../images/Note.png', () => 'note.png');

describe('TrackList', () => {
    const mockTracks = [
        {
          id: '1',
          name: 'Test Track',
          duration_ms: 215000,
          album: {
            name: 'Test Album',
            images: [{ url: 'https://example.com/image.jpg' }],
          },
          artists: [
            { id: 'a1', name: 'Artist One' },
            { id: 'a2', name: 'Artist Two' },
          ],
        },
        {
          id: '2',
          name: 'Track Without Image',
          duration_ms: 90000,
          album: {
            name: 'No Image Album',
            images: [],
          },
          artists: [{ id: 'a3', name: 'Solo Artist' }],
        },
      ];

  test('renders track information including name, album, duration, and artists', () => {
    render(<TrackList tracks={mockTracks} />);

    expect(screen.getByText('Test Track')).toBeInTheDocument();
    expect(screen.getByText('Track Without Image')).toBeInTheDocument();

    expect(screen.getByText(/Test Album/)).toBeInTheDocument();
    expect(screen.getByText(/No Image Album/)).toBeInTheDocument();

    expect(screen.getByText('Artist One')).toBeInTheDocument();
    expect(screen.getByText('Artist Two')).toBeInTheDocument();
    expect(screen.getByText('Solo Artist')).toBeInTheDocument();

    expect(screen.getByText('3:35 min')).toBeInTheDocument();
    expect(screen.getByText('1:30 min')).toBeInTheDocument();

    expect(screen.getByAltText('album logo').src).toBe('https://example.com/image.jpg');

    const fallbackImage = screen.getAllByAltText('album logo')[1];
    expect(fallbackImage.src).toContain('note.png');
  });
});
