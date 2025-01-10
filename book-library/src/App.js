import './App.css';
import BooksContextProvider from './context/BooksContextProvider';
import Books from './components/Books';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <BooksContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
          <Route path='/books' element={<Navigate to="/" />}></Route>
          <Route path='/books/:bookId' element={<BookDetails/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </BooksContextProvider>
  );
}

export default App;
