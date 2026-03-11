import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NoteCard from '../components/NoteCard';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

const mockNote = {
  id: '1',
  title: 'My First Test',
  details: 'Testing is working perfectly!',
  color: 'bg-yellow-100',
  isFeatured: true,
  createdAt: new Date().toISOString()
};

describe('NoteCard Component', () => {
  it('should display the note title and details', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteCard note={mockNote} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('My First Test')).toBeInTheDocument();
    expect(screen.getByText('Testing is working perfectly!')).toBeInTheDocument();
  });

  it('should show the featured star icon', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NoteCard note={mockNote} />
        </BrowserRouter>
      </Provider>
    );
    
    expect(screen.getByTitle(/Toggle Featured/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Edit note/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Delete note/i)).toBeInTheDocument();
  });
});