import { Search } from 'lucide-react'; 
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { setSearchTerm } from '../features/notesSlice';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.notes.searchTerm);

  return (
    // غيرنا max-w-md لـ max-w-[180px] في الموبايل و md:max-w-md للشاشات الكبيرة
    <div className="relative w-full max-w-45 md:max-w-md flex items-center">
      <div className="absolute left-0 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-600" strokeWidth={2.5} />
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        // استخدمنا text-lg بدل text-xl عشان نوفر مساحة في العرض الصغير
        className="block w-full pl-8 pr-2 bg-transparent text-lg md:text-xl placeholder-slate-600 outline-none h-full"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;