import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/newComponent1/NavBar";
import BookList from "./components/newComponent1/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import BukNav from "./components/newComponent1/BukNav";
import Themetoggle from "./components/newComponent1/Themetoggle";
import AuthContextProvider from "./context/AuthContextProvider";
import BookContextProvider from "./context/BookContextProvider";

function App() {
  return (
    <div className="App ">
      <ThemeContextProvider>
        <AuthContextProvider>
                {/* <NavBar /> */}
                <BukNav />
              <BookContextProvider>
                   <BookList />
              </BookContextProvider>
                <Themetoggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
