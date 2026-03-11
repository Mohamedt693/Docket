import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';
import { store } from '../store/store';


describe('Add Button', () => {
    it('should render the add button', () => {
        render(<button title="Add new Note">+</button>);

        const addButton = screen.getByTitle(/Add new note/i);

        expect(addButton).toBeInTheDocument();
    });   

    it('should trigger a function when clicked', () => {
        const handleClick = vi.fn();
        render(<button title="Add new Note" onClick={handleClick}>+</button>);

        const addButton = screen.getByTitle(/Add new note/i);
        fireEvent.click(addButton);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should add a new note when clicked', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )

        const initialNotes = screen.queryAllByRole('note').length;
        const addButton = screen.getByTitle(/Add new note/i);
        fireEvent.click(addButton);

        const updatedNotes = screen.queryAllByRole('note').length;
        expect(updatedNotes).toBe(initialNotes + 1);
    });
});