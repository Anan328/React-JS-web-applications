import './App.css';
import BooksContextProvider from './context/BooksContextProvider';
import Books from './components/Books';

function App() {
  return (
    <BooksContextProvider>
      <div className="App">
      
      <Books/>
      </div>
    </BooksContextProvider>
  );
}

export default App;
