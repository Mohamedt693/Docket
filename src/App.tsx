import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import NoteModal from './components/NoteModal'; 
import { useAppSelector } from './hooks/hook';  

const App = () => {
    const activeNoteId = useAppSelector((state) => state.notes.activeNoteId);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>

            <NoteModal key={activeNoteId || 'closed'} />
        </>
    );
};

export default App;