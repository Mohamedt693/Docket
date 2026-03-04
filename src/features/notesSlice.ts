import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Note {
  id: string;
  title: string;
  details: string;
  isFeatured: boolean;
  createdAt: string;
  color?: string;
}

interface NotesState {
  notes: Note[];
  activeNoteId: string | null;
  searchTerm: string;
}


const loadNotes = (): Note[] => {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
}

const initialState: NotesState = {
  notes: loadNotes(),
  activeNoteId: null,
  searchTerm: "",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {

    addNote: (state, action: PayloadAction<{ title: string; details: string }>) => {
      const newNote: Note = {
        id: uuidv4(),
        title: action.payload.title || "New Note",
        details: action.payload.details || "Start typing here...",
        isFeatured: false,
        createdAt: new Date().toISOString(),
      };
      state.notes.unshift(newNote); 
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    toggleFeatured: (state, action: PayloadAction<string>) => {
      const index = state.notes.findIndex(note => note.id === action.payload);
      if (index !== -1) {
        state.notes[index].isFeatured = !state.notes[index].isFeatured;
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
    },

    updateNote: (state, action: PayloadAction<{ id: string; title: string; details: string, color?: string }>) => {
      const { id, title, details, color } = action.payload;
      const index = state.notes.findIndex(note => note.id === id);
      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], title, details, color };
        localStorage.setItem("notes", JSON.stringify(state.notes));
      }
    },

    openEditModal: (state, action: PayloadAction<string>) => {
      state.activeNoteId = action.payload;
    },

    closeModal: (state) => {
      state.activeNoteId = null;
    },

    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  }
});


export const { 
  addNote, 
  deleteNote, 
  toggleFeatured, 
  updateNote, 
  openEditModal, 
  closeModal,
  setSearchTerm
} = notesSlice.actions;

export default notesSlice.reducer;