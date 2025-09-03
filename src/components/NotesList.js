import React from 'react';
import NoteCard from './NoteCard';

function NotesList({ notes, onCreateNew, onViewNote }) {
  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <div className="notes-section">
      <div className="section-header">
        <h2 className="section-title">Your Notes</h2>
        <button className="btn" onClick={onCreateNew}>
          ✏️ New Note
        </button>
      </div>

      {sortedNotes.length === 0 ? (
        <div className="empty-state">
          <h3>No notes yet</h3>
          <p>Create your first note to get started!</p>
          <button className="btn" onClick={onCreateNew}>
            ✏️ Create First Note
          </button>
        </div>
      ) : (
        <div className="notes-grid">
          {sortedNotes.map(note => (
            <NoteCard 
              key={note.id}
              note={note}
              onClick={() => onViewNote(note)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesList;