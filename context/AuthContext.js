import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    const res = await fetch(`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    // const user = await res.json()
    // if (res.ok) {
    //   setUser(user)
    //   router.push('/')
    // } else {
    //   setError(data.message)
    //   setError(null)
    // }
  }
  

  const logout = async () => {
    console.log('Logout');
  };

  const checkUserLoggedIn = async (user) => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{user, error, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext
