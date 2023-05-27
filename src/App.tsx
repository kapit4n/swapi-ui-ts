import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'
import { useEffect } from 'react';
import { loadPeople } from './actions/people';

function App() {

  useEffect(() => {
    loadPeople();
  }, [])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
