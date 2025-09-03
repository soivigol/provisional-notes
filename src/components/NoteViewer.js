import React from 'react';
import { formatDate } from '../utils/storage';

function NoteViewer({ note, onEdit, onDelete, onBack }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete();
    }
  };

  const copyToClipboard = async () => {
    try {
      // Create a temporary element for copying
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = note.content;
      tempDiv.style.position = 'fixed';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '0';
      tempDiv.style.whiteSpace = 'pre-wrap';
      tempDiv.contentEditable = true;
      document.body.appendChild(tempDiv);

      // Focus and select all content
      tempDiv.focus();
      const range = document.createRange();
      range.selectNodeContents(tempDiv);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      // Use execCommand for better formatting preservation
      let success = false;
      try {
        success = document.execCommand('copy');
      } catch (execError) {
        console.log('execCommand failed:', execError);
      }

      // Clean up selection
      selection.removeAllRanges();
      document.body.removeChild(tempDiv);

      if (success) {
        alert('✅ Note copied with formatting! Ready to paste in WhatsApp, Telegram, or email.');
      } else {
        // Fallback to modern API
        if (navigator.clipboard) {
          try {
            // Try rich text first
            const clipData = new DataTransfer();
            clipData.items.add(note.content, 'text/html');
            clipData.items.add(tempDiv.textContent || '', 'text/plain');
            
            await navigator.clipboard.write([
              new ClipboardItem({
                'text/html': new Blob([note.content], { type: 'text/html' }),
                'text/plain': new Blob([tempDiv.textContent || ''], { type: 'text/plain' })
              })
            ]);
            alert('✅ Note copied with formatting! Ready to paste.');
          } catch (apiError) {
            // Final fallback: plain text
            await navigator.clipboard.writeText(tempDiv.textContent || '');
            alert('📋 Note copied as plain text to clipboard!');
          }
        } else {
          throw new Error('No clipboard API available');
        }
      }

    } catch (error) {
      console.error('Copy failed:', error);
      alert('❌ Failed to copy. Please select the text manually and copy with Ctrl+C.');
    }
  };

  return (
    <div className="note-viewer">
      <div className="viewer-header">
        <div>
          <h1 className="viewer-title">
            {note.title || 'Untitled Note'}
          </h1>
          <div className="viewer-date">
            Created: {formatDate(note.createdAt)}
            {note.updatedAt !== note.createdAt && (
              <span> • Updated: {formatDate(note.updatedAt)}</span>
            )}
          </div>
        </div>
        <div className="viewer-actions">
          <button className="btn btn-secondary btn-small" onClick={onBack}>
            ← Back
          </button>
          <button className="btn btn-secondary btn-small" onClick={copyToClipboard}>
            📋 Copy
          </button>
          <button className="btn btn-small" onClick={onEdit}>
            ✏️ Edit
          </button>
          <button className="btn btn-secondary btn-small" onClick={handleDelete}>
            🗑️ Delete
          </button>
        </div>
      </div>

      <div 
        className="viewer-content"
        dangerouslySetInnerHTML={{
          __html: note.content || '<p style="color: #666;">No content</p>'
        }}
      />
    </div>
  );
}

export default NoteViewer;