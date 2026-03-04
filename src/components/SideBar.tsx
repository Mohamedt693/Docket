import { useAppDispatch } from '../hooks/hook';
import { addNote } from '../features/notesSlice';

function SideBar() {
    const dispatch = useAppDispatch();

    const handleAddNote = () => {
        dispatch(addNote({ title: '', details: '' }));
    };

    return (
        <aside className="w-full md:w-28 h-20 md:h-screen flex flex-row md:flex-col items-center justify-center md:justify-start
        border-t md:border-t-0 md:border-r border-slate-200 bg-white py-4 md:py-8 order-2 md:order-1">
            
            <div className="hidden md:flex h-14 items-center md:mb-20"> 
                <h1 className='text-2xl font-bold'>
                    Docket
                </h1>
            </div>

            <button 
                onClick={handleAddNote}
                className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full 
                cursor-pointer text-3xl md:text-4xl shadow-xl flex items-center justify-center 
                transition-transform active:scale-95"
                title="Add new note"
            >
                <span className="mb-0 md:mb-2">+</span>
            </button>

        </aside>
    );
}

export default SideBar;
