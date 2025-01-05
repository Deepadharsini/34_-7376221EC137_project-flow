// src/components/Navbar.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-green-700">Grify</div>
      <div className="text-gray-700">{user ? `Hello, ${user.username}` : 'Hello, Guest'}</div>
    </div>
  );
};

export default Navbar;
