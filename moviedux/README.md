Here’s the modified version of your README to include information about the watchlist functionality and the use of `localStorage` for persistence:

---

# Moviedux

Moviedux is a dynamic movie listing application developed with React. It showcases a curated list of movies fetched from a locally stored `movies.json` file, allowing users to filter the movie list by genres and ratings through an intuitive search bar and dropdown menus. Users can also add movies to their personal watchlist, with the watchlist data being saved to `localStorage` to persist across page refreshes.

## Features

- Displays a list of movies fetched from a `movies.json` file stored locally within the project.
- Includes a search bar to filter movies by title.
- Allows filtering of movies by genre and rating through dropdown menus.
- Users can add and remove movies from their personal watchlist.
- The watchlist is stored in the browser's `localStorage` to ensure it persists across page refreshes.
- Built using React, leveraging components to ensure modularity and reusability.
- Simple and clean UI for an engaging user experience.

## File Structure

The project follows this file and folder structure:

```
React-JS-web-applications/
  └── moviedux/
      ├── public/
      │   ├── images/               # Movie images
      │   ├── movies.json           # JSON file with movie data
      │   └── index.html            # Main HTML file
      ├── src/
      │   ├── components/
      │   │   ├── Footer.js         # Footer component
      │   │   ├── Header.js         # Header component
      │   │   ├── MovieCard.js      # Individual movie card component
      │   │   └── MoviesGrid.js     # Grid of movie cards component
      │   ├── styles.css            # CSS file for styling
      │   └── App.js                # Main React app component
      └── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anan328/React-JS-web-applications.git
   ```

2. Navigate to the `moviedux` directory:
   ```bash
   cd React-JS-web-applications/moviedux
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the application.

## Built With

- React

## Written with ❤️ by Anaan

---

This updated README now includes the new features related to the watchlist functionality and the persistence of data via `localStorage`. Let me know if you'd like any further tweaks! 😊