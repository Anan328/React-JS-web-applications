import './App.css';
import BooksContextProvider from './context/BooksContextProvider';
import Books from './components/Books';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BooksContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
        </Routes>
      </Router>
    </BooksContextProvider>
  );
}

export default App;
