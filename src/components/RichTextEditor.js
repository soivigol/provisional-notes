import React, { useRef, useEffect } from 'react';

function RichTextEditor({ content, onChange, placeholder }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content || '';
    }
  }, [content]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleInput();
  };

  const insertList = (ordered = false) => {
    const command = ordered ? 'insertOrderedList' : 'insertUnorderedList';
    executeCommand(command);
  };

  const formatBlock = (tag) => {
    executeCommand('formatBlock', tag);
  };

  return (
    <div className="rich-text-editor">
      <div className="toolbar">
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('bold')}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('italic')}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('underline')}
            title="Underline (Ctrl+U)"
          >
            <u>U</u>
          </button>
        </div>
        
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => formatBlock('h1')}
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => formatBlock('h2')}
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => formatBlock('p')}
            title="Normal Text"
          >
            P
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => insertList(false)}
            title="Bullet List"
          >
            • List
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => insertList(true)}
            title="Numbered List"
          >
            1. List
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('removeFormat')}
            title="Remove Formatting"
          >
            Clear
          </button>
        </div>
      </div>

      <div
        ref={editorRef}
        className="rich-editor-content"
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        suppressContentEditableWarning={true}
        data-placeholder={placeholder}
      />
    </div>
  );
}

export default RichTextEditor;