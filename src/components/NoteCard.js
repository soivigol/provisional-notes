import React from 'react';
import { formatDate } from '../utils/storage';

function NoteCard({ note, onClick }) {
  const getPlainTextContent = (htmlContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    return tempDiv.textContent || tempDiv.innerText || '';
  };
  
  const plainTextContent = getPlainTextContent(note.content || '');
  const preview = plainTextContent.substring(0, 100);
  const title = note.title || 'Untitled Note';

  return (
    <div className="note-card" onClick={onClick}>
      <div className="note-title">{title}</div>
      <div className="note-preview">
        {preview}{plainTextContent.length > 100 ? '...' : ''}
      </div>
      <div className="note-date">{formatDate(note.updatedAt)}</div>
    </div>
  );
}

export default NoteCard;