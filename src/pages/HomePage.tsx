import { motion, AnimatePresence } from 'framer-motion';  
import SearchInput from '../components/SearchInput';
import NoteCard from '../components/NoteCard';
import { useAppSelector } from '../hooks/hook';

function HomePage() {
  const notes = useAppSelector((state) => state.notes.notes);
  const searchTerm = useAppSelector((state) => state.notes.searchTerm);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col gap-10 md:gap-16'>

      <div className="flex items-center justify-between w-full">
        <div className="h-14 flex items-center border-b border-slate-400"> 
          <SearchInput />
        </div>
        <div className="md:hidden shrink-0">
          <img 
            src="/favicon.svg" 
            alt="Logo" 
            className="w-10 h-10 rounded-xl shadow-sm" 
          />
        </div>
      </div>

      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                layout  
                initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }}     
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}   
                transition={{ type: "spring", stiffness: 300, damping: 25 }}  
              >
                <NoteCard note={note} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-20 text-center px-4"
        >
          <p className="text-slate-400 text-lg">Your docket is empty.</p>
          <p className="text-slate-300 text-sm">Click the plus button to create your first note!</p>
        </motion.div>
      )}
    </div>
  );
}

export default HomePage;