import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';
import AuthContext from '@/context/AuthContext';
import styles from '@/styles/Header.user.module.css';
import dynamic from 'next/dynamic'
const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            HOTEL{' '}
            <span
              style={{
                fontFamily: "'Monoton', cursive",
                fontSize: '130%',
                fontWeight: 'bold',
              }}
            >
              California
            </span>
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/reviews">
              <a>Leave a Review</a>
            </Link>
          </li>
          <li>
            <button className="btn-no-style" onClick={() => setShowModal(true)}>
              <a>Chat Now</a>
            </button>
            
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="#">
                  <a>Leave reviews</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
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
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
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
      <Modal show={showModal} onClose={() => setShowModal(false)}><AblyChatComponent /></Modal>
    </header>
  );
}
