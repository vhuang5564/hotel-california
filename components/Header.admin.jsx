import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.user.module.css'

export default function HeaderAdmin() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/admin/dashboard'>
          <a>HOTEL <span style={{fontFamily: "'Monoton', cursive", fontSize: "170%", fontWeight: "bold"}}>California</span></a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
        <li>
            <Link href="#">
              <a>Welcome <span style={{fontFamily: "'Monoton', cursive", color: "red"}}>Big Boss Admin1</span></a>
            </Link>
          </li>
          <li>
            <Link href='/admin/user_reviews'>
              <a>Reviews</a>
            </Link>
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link href='/admin/user_reviews'>
                  <a>Check reviews</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className='btn-secondary btn-icon'
                >
                  <FaSignOutAlt /> 
                  Logout
                </button>
              </li>
            </>
          ) : (
            // If logged out
            <>
              <li>
                <Link href='/account/login'>
                  <a className='btn-secondary btn-icon'>
                    {/* <FaSignInAlt /> 
                    Login */}
                     <FaSignOutAlt />
                  Logout
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}