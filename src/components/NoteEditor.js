import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';

function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const getPlainTextContent = (htmlContent) => {
    // Create a temporary div to extract plain text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const handleSave = () => {
    const plainTextContent = getPlainTextContent(content).trim();
    const plainTextTitle = title.trim();
    
    if (plainTextTitle || plainTextContent) {
      onSave({
        ...note,
        title: plainTextTitle,
        content: content.trim()
      });
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const isContentEmpty = () => {
    const plainTextContent = getPlainTextContent(content).trim();
    const plainTextTitle = title.trim();
    return !plainTextTitle && !plainTextContent;
  };

  return (
    <div className="note-editor">
      <div className="editor-header">
        <h2 className="editor-title">
          {note?.id ? 'Edit Note' : 'New Note'}
        </h2>
        <div className="editor-actions">
          <button className="btn btn-secondary btn-small" onClick={handleCancel}>
            ❌ Cancel
          </button>
          <button 
            className="btn btn-small" 
            onClick={handleSave}
            disabled={isContentEmpty()}
          >
            💾 Save Note
          </button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
          autoFocus
        />
      </div>

      <div className="form-group">
        <label className="form-label">Content</label>
        <RichTextEditor
          content={content}
          onChange={setContent}
          placeholder="Write your note content here..."
        />
      </div>
    </div>
  );
}

export default NoteEditor;