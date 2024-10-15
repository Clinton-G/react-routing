import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import BrowseCharacters from './BrowseCharacters.jsx';
import CharacterDetails from './CharacterDetails.jsx';
import Comics from './Comics.jsx';
import './comp-lifecycle.css';
import NotFound from './NotFound.jsx';

function App() {
    return (
        <Router>
            <div className='App'>
                <h1>Marvel API</h1>
                <nav>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/browse-characters" activeClassName="active-link">Browse Characters</NavLink>
                    <NavLink to="/comics" activeClassName="active-link">Comics</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse-characters" element={<BrowseCharacters />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="/character/:id" element={<CharacterDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
