import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './contexts/UserContext';
import UsersList from './pages/UsersList';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="panel" element={<Home />} />
            <Route path="userslist" element={<UsersList />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;