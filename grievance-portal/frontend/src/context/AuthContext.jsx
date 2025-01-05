// src/context/AuthContext.js
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to store user data, initially loading from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Function to extract username from email
  const getUsernameFromEmail = (email) => {
    if (!email) return 'Guest';
    const domain = '@bitsathy.ac.in';
    
    if (email.endsWith(domain)) {
      const namePart = email.slice(0, -domain.length);
      const parts = namePart.split('.');
      return parts.length > 1 ? parts[0] : namePart;
    }
    return email.split('@')[0]; // Fallback for non-bitsathy emails
  };

  // Login function to store the user's data
  const login = (email) => {
    if (!email) return;

    const username = getUsernameFromEmail(email); // Get the username
    const userData = { username, email }; // Create the user data object
    setUser(userData); // Update the user in state
    localStorage.setItem('user', JSON.stringify(userData)); // Save the user to localStorage
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null); // Reset the user state
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
