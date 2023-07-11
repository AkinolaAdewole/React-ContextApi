import logo from './logo.svg';
import './App.css';
import NavBar from './components/newComponent1/NavBar';
import BookList from './components/newComponent1/BookList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className='App '>
      <ThemeContextProvider>
              <NavBar />
              <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
