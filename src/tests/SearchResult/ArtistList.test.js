import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArtistList from '../../components/SearchResult/ArtistList';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

jest.mock('../../images/User.png', () => 'User.png');

describe('ArtistList', () => {
  const mockArtists = [
    {
      id: '1',
      name: 'Artist One',
      images: [
        {}, 
        {}, 
        { url: 'https://example.com/artist1.jpg' }
      ],
      genres: ['pop', 'rock'],
    },
    {
      id: '2',
      name: 'Artist Two',
      images: [],
      genres: [],
    }
  ];

  test('renders artists information including name, genres and image', () => {
    render(<ArtistList artists={mockArtists} />);

    expect(screen.getByText((content) => content.includes('Artist One'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Artist Two'))).toBeInTheDocument();

    const images = screen.getAllByAltText('Artist Logo');
    expect(images[0].src).toBe('https://example.com/artist1.jpg');
    expect(images[1].src).toContain('User.png');

    expect(screen.getByText((content) => content.includes('Genres:'))).toBeInTheDocument();
    expect(screen.getByText((_, el) => el.tagName === 'EM' && el.textContent === 'pop / ')).toBeInTheDocument();
    expect(screen.getByText((_, el) => el.tagName === 'EM' && el.textContent === 'rock / ')).toBeInTheDocument();
    
    expect(screen.getByRole('link', { name: 'Artist One' })).toHaveAttribute('href', '/artist/1');
    expect(screen.getByRole('link', { name: 'Artist Two' })).toHaveAttribute('href', '/artist/2');
  });
});