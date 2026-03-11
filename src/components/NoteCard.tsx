import { Trash2, Star, Edit3 } from 'lucide-react';
import { useAppDispatch } from '../hooks/hook'; 
import { deleteNote, toggleFeatured, openEditModal, type Note } from '../features/notesSlice';

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const bgColor = note.color || 'bg-slate-100';
  const dispatch = useAppDispatch();

  return (
    <div 
    role='note'
    className={`${bgColor} p-6 rounded-3xl border border-slate-200 shadow-sm 
    hover:shadow-md transition-shadow group relative flex flex-col h-full`}>
      <button 
        onClick={() => dispatch(toggleFeatured(note.id))}      
        className="absolute top-4 right-4 transition-all duration-300 active:scale-90"
        title="Toggle Featured"
      >
        <Star 
          size={20} 
          fill={note.isFeatured ? "#eab308" : "transparent"} 
          className="text-yellow-500 cursor-pointer"
          strokeWidth={2.5}
        />
      </button>

      <h3 className="text-xl font-bold mb-2 pr-6 leading-tight text-slate-800">
        {note.title || "Untitled"}
      </h3>

      <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
        {note.details || "No details available..."}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
        <span className="text-[12px] uppercase tracking-wider text-black font-bold">
            {new Date(note.createdAt).toLocaleDateString('en-GB')}
        </span>
        
        <div className="flex gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => dispatch(openEditModal(note.id))}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer"
            title="Edit Note"
          >
            <Edit3 size={16} />
          </button>
          
          <button 
            onClick={() => dispatch(deleteNote(note.id))}
            className="p-2 hover:bg-red-50 rounded-full text-red-500 transition-colors cursor-pointer"
            title="Delete Note"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;