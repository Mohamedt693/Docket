import { X, Check } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { closeModal, updateNote } from '../features/notesSlice';
import { useState } from 'react';


const colors = [
    { name: 'Slate', value: 'bg-slate-100', hex: '#f1f7f9' },
    { name: 'Blue',   value: 'bg-blue-200',   hex: '#bfdbfe' },  
    { name: 'Yellow', value: 'bg-yellow-200',  hex: '#fef08a' },  
    { name: 'Pink',   value: 'bg-pink-200',    hex: '#fbcfe8' },  
    { name: 'Green',  value: 'bg-green-200',   hex: '#bbf7d0' }, 
    { name: 'Purple', value: 'bg-purple-200',  hex: '#e9d5ff' }, 
];

const NoteModal = () => {
    const dispatch = useAppDispatch();

    const activeNoteId = useAppSelector((state) => state.notes.activeNoteId);
    const activeNote = useAppSelector((state) => 
        state.notes.notes.find((n) => n.id === activeNoteId)
    );

    const [selectedColor, setSelectedColor] = useState(activeNote?.color || 'bg-white');
    const [title, setTitle] = useState(activeNote?.title || '');
    const [details, setDetails] = useState(activeNote?.details || '');


    if (!activeNoteId) return null;

    const handleSave = () => {
        dispatch(updateNote({ 
            id: activeNoteId, 
            title, 
            details, 
            color: selectedColor 
        }));
        dispatch(closeModal());
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => dispatch(closeModal())}
            />

        <div className="relative bg-white w-full max-w-2xl rounded-4xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
            <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Edit Note</span>
                <button onClick={() => dispatch(closeModal())} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                    <X size={20} />
                </button>
            </div>

            <div className="p-8 flex flex-col gap-4">
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-4xl font-bold outline-none text-slate-800"
                placeholder="Title"
                />
                <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="text-lg text-slate-600 outline-none min-h-75 resize-none leading-relaxed"
                placeholder="Content"
                />
            </div>

            <div className="px-8 pb-6 flex items-center gap-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Theme:</span>
                <div className="flex gap-2">
                    {colors.map((color) => (
                        <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        style={{ backgroundColor: color.hex }} 
                        className={`w-8 h-8 rounded-full border-2 transition-all 
                            ${selectedColor === color.value 
                            ? 'border-black scale-110 shadow-md' 
                            : 'border-slate-400 hover:scale-105'
                            }`}
                        title={color.name}
                        />
                ))}
                </div>
            </div>

            <div className="p-6 bg-slate-50 flex justify-end gap-3">
                <button onClick={() => dispatch(closeModal())} className="px-6 py-2 text-sm font-bold text-slate-400 hover:text-slate-600">
                    Discard
                </button>
                <button
                onClick={handleSave}
                className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                >
                    <Check size={18} />
                    Save Changes
                </button>
            </div>
        </div>
    </div>
    );
};

export default NoteModal;