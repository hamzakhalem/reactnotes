# React Notes

The React frontend of a notes app. It talks to a Django REST API, [django-mynotes-backend](https://github.com/hamzakhalem/django-mynotes-backend).

## Features

- List of notes, each showing its first line as the title, a preview and the date it was last updated
- Open a note and edit it in a full-page text area
- Saves when you go back: updates the note, creates it if it's new, or deletes it if you emptied it
- Delete button on each note
- Add button to start a new note
- Dark theme

## Built with

- React 18, Create React App
- React Router 5
- Fetch API, with the dev server proxying `/api` to the Django backend

## Run it locally

Start the backend first (see [django-mynotes-backend](https://github.com/hamzakhalem/django-mynotes-backend)) so the API runs at http://127.0.0.1:8000. Then:

```bash
git clone https://github.com/hamzakhalem/reactnotes.git
cd reactnotes/react/frontend
npm install
npm start
```

The app opens at http://localhost:3000.

## Project structure

```
react/frontend/src/
  App.js                 Routes: note list and note page
  pages/NoteListPage.js  All notes
  pages/NotePage.js      View, edit, create and delete a note
  components/            Header, list item, add button
```
