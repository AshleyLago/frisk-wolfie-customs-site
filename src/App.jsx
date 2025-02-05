import './App.css'

import { LandingPage } from './components/pages/Landing';
import { AboutPage } from './components/pages/About';
import { PortfolioPage } from './components/pages/Portfolio';
import { pageWrapper } from './components/layout/PageWrapper.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: pageWrapper(<LandingPage />)
  },
  {
    path: '/about',
    element: pageWrapper(<AboutPage />),
  },
  {
    path: '/portfolio',
    element: pageWrapper(<PortfolioPage />),
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
