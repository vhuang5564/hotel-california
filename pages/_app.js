import '../styles/globals.css';
import Sidebar from '../components/Sidebar';


const MyApp = ({ Component, pageProps }) => {
  return <>
    <Sidebar />
    <Component {...pageProps} />;
  </>;
};

export default MyApp;
