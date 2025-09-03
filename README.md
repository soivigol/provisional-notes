# 📝 Provisional Notes

A sleek, offline-capable note-taking app designed for quickly drafting messages before sharing them on WhatsApp, Telegram, or email. Built with React and featuring a rich text editor with dark theme styling.

## ✨ Features

- **🎨 Rich Text Editor** - Format your notes with bold, italic, underline, headings, and lists
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🌙 Dark Theme** - Easy on the eyes with black backgrounds and orange accents
- **💾 Local Storage** - All notes are saved locally in your browser
- **🧹 Auto-Cleanup** - Notes older than 7 days are automatically removed
- **📋 Smart Copy** - Preserves formatting when copying to WhatsApp, Telegram, or email
- **⚡ Offline Ready** - Works completely offline after building
- **🔄 Real-time Save** - Notes are saved as you type

## 🚀 Quick Start

### Option 1: Use the Pre-built Version (Recommended)
1. Download the repository
2. Open `build/index.html` in your browser
3. Start taking notes immediately!

### Option 2: Development Setup
```bash
# Clone the repository
git clone https://github.com/soivigol/provisional-notes.git
cd provisional-notes

# Install dependencies
npm install

# Start development server
npm start
# App will open at http://localhost:3000

# Build for production (offline use)
npm run build
# Then open build/index.html in your browser
```

## 📖 How to Use

### Creating Notes
1. Click **"New Note"** or **"Create First Note"**
2. Add a title (optional)
3. Use the rich text toolbar to format your content:
   - **B** - Bold text
   - **I** - Italic text  
   - **U** - Underline text
   - **H1/H2** - Headings
   - **• List** - Bullet points
   - **1. List** - Numbered lists
   - **Clear** - Remove formatting
4. Click **"Save Note"** to save and view

### Viewing and Managing Notes
- **View Notes**: Click on any note card to read the full content
- **Edit Notes**: Click the **"✏️ Edit"** button in the note viewer
- **Copy Notes**: Click **"📋 Copy"** to copy with rich formatting for messaging apps
- **Delete Notes**: Click **"🗑️ Delete"** and confirm

### Rich Text Copying
When you copy a note, the formatting is preserved for:
- **WhatsApp** - Bold and italic formatting
- **Telegram** - Full formatting including lists and headings  
- **Email clients** - Complete rich text formatting
- **Other apps** - Graceful fallback to formatted or plain text

## 🛠️ Technical Details

### Built With
- **React 18** - Modern UI framework
- **Create React App** - Zero-config build setup
- **Local Storage API** - Client-side data persistence
- **Rich Text Editing** - ContentEditable with custom toolbar
- **CSS3** - Modern styling with dark theme

### Project Structure
```
provisional-notes/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.svg         # Custom note icon
├── src/
│   ├── components/
│   │   ├── NoteCard.js     # Note preview cards
│   │   ├── NotesList.js    # Notes grid layout
│   │   ├── NoteEditor.js   # Create/edit form
│   │   ├── NoteViewer.js   # Note display
│   │   └── RichTextEditor.js # Formatting toolbar
│   ├── utils/
│   │   └── storage.js      # Local storage utilities
│   ├── App.js             # Main application
│   ├── index.js           # React entry point
│   └── index.css          # Dark theme styles
├── build/                 # Production build (after npm run build)
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Customization

The app uses a consistent dark theme with orange accents:
- **Background**: `#1a1a1a` (dark black)
- **Cards/Panels**: `#2a2a2a` (medium dark)
- **Inputs/Content**: `#333` (lighter dark)
- **Primary Color**: `#ff8c00` (orange) - used for buttons, headings, and accents
- **Text**: `#ffffff` (white) with `#ccc` and `#999` for secondary text

## 🔒 Privacy & Data

- **100% Local** - All data stays on your device
- **No Server** - No data is sent to external servers
- **No Tracking** - No analytics or user tracking
- **Offline First** - Works without internet connection
- **Auto-Cleanup** - Old notes (7+ days) are automatically removed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have suggestions:
1. Check the [Issues](https://github.com/soivigol/provisional-notes/issues) page
2. Create a new issue with a detailed description
3. Include steps to reproduce any bugs

---

**Made with ❤️ for quick note-taking and easy sharing**

*Perfect for drafting messages before sending them on your favorite messaging apps!*