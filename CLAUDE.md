# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a project to do a little app that should be work in local. Built with HTML, CSS and JS (React). The app should open in the browser and. Save the data in the local storage. And obtain the data from it. 
The idea it's to have a little note editor to crate simple notes previously to send in other platforms as WhatsApp, Telegram or email. When you save one note, leave in a single view. All notes should be listed. When I click in one note, should appear the view content. If I like to edit, click in edit button. 
Styles: black colors for backgrounds with the correct white color for texts. The icons or buttons, use the primary color as a orange variant that combine fine with the background.

## Development Commands

### For Development:
```bash
npm install          # Install dependencies
npm start           # Start development server (http://localhost:3000)
```

### For Production (Offline Use):
```bash
npm run build       # Build optimized production version
```

After building, you can:
1. Open `build/index.html` directly in your browser (offline)
2. Or serve the build folder:
   ```bash
   npx serve -s build
   ```

## Architecture and Structure

The application is built as a single-page React application with the following structure:

- `index.html` - Main HTML file with React CDN imports
- `styles.css` - Dark theme styling with orange accent colors
- `app.js` - Complete React application with all components

### Components:
- **App** - Main application component managing state and routing
- **NotesList** - Displays all notes in a grid layout
- **NoteCard** - Individual note preview cards
- **NoteEditor** - Form for creating and editing notes
- **NoteViewer** - Full note display with actions

### Features:
- Local storage persistence
- Create, read, update, delete notes
- Copy note content to clipboard
- Responsive dark theme design
- Real-time save functionality

## File Structure
```
/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── NoteCard.js     # Individual note preview card
│   │   ├── NotesList.js    # Notes grid and empty state
│   │   ├── NoteEditor.js   # Create/edit note form
│   │   └── NoteViewer.js   # View note with actions
│   ├── utils/
│   │   └── storage.js      # Local storage utilities
│   ├── App.js             # Main application component
│   ├── index.js           # React app entry point
│   └── index.css          # Dark theme styles
├── build/                 # Production build (after npm run build)
├── package.json           # Dependencies and scripts
└── CLAUDE.md             # This documentation file
```