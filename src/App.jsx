// Bringing in the required imports
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
};

// Export
export default App