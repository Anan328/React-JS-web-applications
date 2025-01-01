import './App.css';
import './styles.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">

      <div className='container'>
        <Header/>
      </div>
      <footer className='footer'>
        <p className='footer'>Footer content here</p>
      </footer>
    </div>
  );
}


