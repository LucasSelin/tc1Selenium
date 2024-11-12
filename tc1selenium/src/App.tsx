import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/view/:id" element={<ViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
