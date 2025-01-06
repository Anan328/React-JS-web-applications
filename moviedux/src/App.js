import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist  = (movieId) => {
      setWatchlist(prev => prev.includes(movieId)?  prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }


useEffect(() => {
  const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  setWatchlist(savedWatchlist);
}, []);


useEffect(() => {
  if (watchlist.length > 0)
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}, [watchlist]);

  useEffect(() => {
      fetch("movies.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMovies(data);
        });
    }, []);

  return (
    <div className="App">

      <div className='container'>
        <Header/>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
              
          </nav>
          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
            <Route path='/watchlist' element={<Watchlist   movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
          </Routes>
        </Router>
      </div>
     
      <Footer/>

    </div>
  );
}


