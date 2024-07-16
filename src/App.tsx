import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './contexts/UserContext';
import UsersList from './pages/UsersList';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userslist" element={<UsersList />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;