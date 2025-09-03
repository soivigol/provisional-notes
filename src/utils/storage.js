const STORAGE_KEY = 'provisional-notes';
const CLEANUP_DAYS = 7; // Days after which notes are automatically deleted

export const loadNotes = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const notes = stored ? JSON.parse(stored) : [];
    
    // Auto-cleanup notes older than 7 days
    const cleanedNotes = cleanupOldNotes(notes);
    
    // Save cleaned notes back if any were removed
    if (cleanedNotes.length !== notes.length) {
      saveNotes(cleanedNotes);
    }
    
    return cleanedNotes;
  } catch (error) {
    console.error('Error loading notes:', error);
    return [];
  }
};

const cleanupOldNotes = (notes) => {
  const sevenDaysAgo = Date.now() - (CLEANUP_DAYS * 24 * 60 * 60 * 1000);
  
  return notes.filter(note => {
    // Keep notes that are newer than 7 days based on updatedAt timestamp
    return note.updatedAt > sevenDaysAgo;
  });
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes:', error);
  }
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};