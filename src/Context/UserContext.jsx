import { createContext, useContext, useState } from 'react';

const userContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState('');
  const [userID, setUserID] = useState(localStorage.getItem('userID') || '');

  console.log(userData);

  return (
    <userContext.Provider value={{ userData, setUserData, userID, setUserID }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, userContext };
