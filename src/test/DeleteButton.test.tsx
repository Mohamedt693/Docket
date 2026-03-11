import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi} from 'vitest';
import App from '../App';
import { store } from '../store/store';
import { Trash2 } from 'lucide-react';


describe('Delete Button', () => {
    it('should render the delete button', () => {
        render(<button title="Delete Note">-</button>);

        const deleteButton = screen.getByTitle(/Delete note/i);

        expect(deleteButton).toBeInTheDocument();
    });   

    it('should trigger a function when clicked', () => {
        const handleClick = vi.fn();
        render(
            <button title="Delete Note" onClick={handleClick}>
                <Trash2 size={16} />
            </button>
        );

        const deleteButton = screen.getByTitle(/Delete note/i);
        fireEvent.click(deleteButton);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should delete a note and decrease the count when clicked', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );

        let initialNotes = screen.queryAllByRole('note').length;
    
        if (initialNotes === 0) {
            const addBtn = screen.getByTitle(/Add new note/i);
            fireEvent.click(addBtn);
            initialNotes = screen.queryAllByRole('note').length;
        }

        const deleteButtons = screen.getAllByTitle(/Delete note/i);
        fireEvent.click(deleteButtons[0]);
        const updatedNotes = screen.queryAllByRole('note').length;

        expect(updatedNotes).toBe(initialNotes - 1);
    });
});