import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import UsersList from './pages/Dashboard/UsersList/UsersList';
import Home from './pages/Home';
import UserRegistrationForm from './components/LoginForm/RegistrationForm/UserRegistrationForm';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';


const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="panel" element={<Home />} />
            <Route path="userslist" element={<UsersList />} />
            <Route path="register" element={<UserRegistrationForm />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;