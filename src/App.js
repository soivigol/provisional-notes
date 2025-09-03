import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import NoteViewer from './components/NoteViewer';
import { loadNotes, saveNotes, generateId } from './utils/storage';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentView, setCurrentView] = useState('list'); // 'list', 'editor', 'viewer'
  const [selectedNote, setSelectedNote] = useState(null);
  const [editingNote, setEditingNote] = useState(null);

  // Load notes on component mount
  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  // Save notes whenever notes state changes
  useEffect(() => {
    if (notes.length > 0) {
      saveNotes(notes);
    }
  }, [notes]);

  const createNewNote = () => {
    const newNote = {
      id: null, // Set to null for new notes
      title: '',
      content: '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    setEditingNote(newNote);
    setCurrentView('editor');
  };

  const saveNote = (noteData) => {
    console.log('Saving note:', noteData); // Debug log
    
    let savedNote;
    
    if (noteData.id) {
      // Update existing note
      savedNote = { ...noteData, updatedAt: Date.now() };
      setNotes(prev => prev.map(note => 
        note.id === noteData.id 
          ? savedNote
          : note
      ));
    } else {
      // Create new note
      savedNote = {
        ...noteData,
        id: generateId(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      console.log('Creating new note:', savedNote); // Debug log
      setNotes(prev => [...prev, savedNote]);
    }
    
    // Go to view page instead of list
    setSelectedNote(savedNote);
    setCurrentView('viewer');
    setEditingNote(null);
  };

  const deleteNote = (noteId) => {
    setNotes(prev => prev.filter(note => note.id !== noteId));
    setCurrentView('list');
    setSelectedNote(null);
  };

  const viewNote = (note) => {
    setSelectedNote(note);
    setCurrentView('viewer');
  };

  const editNote = (note) => {
    setEditingNote(note);
    setCurrentView('editor');
  };

  const goToList = () => {
    setCurrentView('list');
    setSelectedNote(null);
    setEditingNote(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Provisional Notes</h1>
        <p>Quick notes for sharing on WhatsApp, Telegram, and email</p>
      </header>

      <main className="main-content">
        {currentView === 'list' && (
          <NotesList 
            notes={notes}
            onCreateNew={createNewNote}
            onViewNote={viewNote}
          />
        )}

        {currentView === 'editor' && (
          <NoteEditor 
            note={editingNote}
            onSave={saveNote}
            onCancel={goToList}
          />
        )}

        {currentView === 'viewer' && selectedNote && (
          <NoteViewer 
            note={selectedNote}
            onEdit={() => editNote(selectedNote)}
            onDelete={() => deleteNote(selectedNote.id)}
            onBack={goToList}
          />
        )}
      </main>
    </div>
  );
}

export default App;