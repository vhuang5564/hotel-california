import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
// import AuthContext from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  // const { login, error } = useContext(AuthContext)
  
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
    const json = await res.json();
    setMessage(json);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({email, password})
    login({email, password})
  }

  return (
    <>
      <div>
        {JSON.stringify(message)}
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}
