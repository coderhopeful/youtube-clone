
import './App.css';
import MainVideo from './components/MainVideo';
import Reccomendations from "./components/Reccomendations"
import Header from "./components/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Reccomendations />} />
            <Route path="/video/:id" element={<MainVideo />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
