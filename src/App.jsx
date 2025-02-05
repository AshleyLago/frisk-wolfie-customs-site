import './App.css'

import { LandingPage } from './components/pages/Landing';
import { pageWrapper } from './components/layout/PageWrapper.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: pageWrapper(<LandingPage />)
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
