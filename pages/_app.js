import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Sidebar from '../components/Sidebar.jsx';

const MyApp = ({ Component, pageProps }) => {
  return <>
    <AuthProvider>
      
      <Component {...pageProps} />
    </AuthProvider>
  </>;
};

export default MyApp;
