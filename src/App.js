import React from 'react' 
import { BrowserRouter } from 'react-router-dom' 
import NavBar from './components/NavBar' 
import Routes from './routes/Routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <main>
          <Routes />
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
