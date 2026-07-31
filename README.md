# Haven — AI-Powered Personalized Virtual Study Room

A responsive, zero-backend virtual study room built with HTML, CSS, and Vanilla JavaScript.

## Run

Open `index.html` in any modern browser. No build step is required.

## Included

- Eight ambient room scenes with animated weather and room details
- Web Audio API-powered ambient mixer (no external audio assets needed)
- Pomodoro / focus timer with local persistence and focus mode
- Tasks with priorities, inline edits, drag-and-drop, and completion progress
- Quick notes, habit tracker, study insights, clock, keyboard shortcuts, and preferences
- Responsive glassmorphism UI and light/dark interface option

## Extension points

`js/weather.js` is deliberately key-free. Add an OpenWeather API key and a small fetch call there when you are ready for live weather. The app modules are isolated so external audio streams, a real playlist service, notifications, achievements, flashcards, and an AI companion can be added without restructuring the UI.
